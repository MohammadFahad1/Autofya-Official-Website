from rest_framework import status
from rest_framework.response import Response
from autofya.base import NewAPIView
from rest_framework.permissions import AllowAny
from authentication.permissions import IsAdminUser
from django.db.models import Count, Sum, Avg, Q
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from analytics.models import PageViewLog
from analytics.serializers import PageViewLogSerializer


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0].strip()
    else:
        ip = request.META.get('REMOTE_ADDR', '127.0.0.1')
    return ip


def detect_device_type(user_agent):
    if not user_agent:
        return 'desktop'
    ua_lower = user_agent.lower()
    if 'ipad' in ua_lower or 'tablet' in ua_lower or 'kindle' in ua_lower:
        return 'tablet'
    elif 'mobile' in ua_lower or 'iphone' in ua_lower or 'android' in ua_lower:
        return 'mobile'
    return 'desktop'


class TrackPageViewView(NewAPIView):
    permission_classes = [AllowAny]
    http_method_names = ['post']

    @swagger_auto_schema(tags=['Analytics'])
    def post(self, request):
        """
        **Track Pageview or Update Dwell Time Heartbeat**\n
        Public endpoint used by the frontend tracker.
        """
        page_view_id = request.data.get('page_view_id')
        duration_seconds = request.data.get('duration_seconds', 0)
        section_name = request.data.get('section_name')

        # Heartbeat or leave event update
        if page_view_id:
            try:
                page_view = PageViewLog.objects.get(id=page_view_id)
                if duration_seconds is not None:
                    page_view.duration_seconds = max(page_view.duration_seconds, int(duration_seconds))
                if section_name:
                    page_view.section_name = section_name
                # Link user if user logged in during session
                if request.user and request.user.is_authenticated and not page_view.user:
                    page_view.user = request.user
                page_view.save()
                return Response({'success': True, 'page_view_id': page_view.id}, status=status.HTTP_200_OK)
            except PageViewLog.DoesNotExist:
                pass

        # Initial Page Visit
        session_id = request.data.get('session_id', '').strip()
        page_url = request.data.get('page_url', '/').strip()
        page_title = request.data.get('page_title', '').strip()
        user_agent = request.META.get('HTTP_USER_AGENT', '')
        ip_address = get_client_ip(request)
        device_type = detect_device_type(user_agent)

        user = request.user if request.user and request.user.is_authenticated else None

        page_view = PageViewLog.objects.create(
            user=user,
            session_id=session_id or 'anon_session',
            ip_address=ip_address,
            user_agent=user_agent,
            device_type=device_type,
            page_url=page_url,
            page_title=page_title,
            section_name=section_name,
            duration_seconds=int(duration_seconds) if duration_seconds else 0
        )

        return Response({
            'success': True,
            'page_view_id': page_view.id
        }, status=status.HTTP_201_CREATED)


class AdminAnalyticsStatsView(NewAPIView):
    permission_classes = [IsAdminUser]
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Admin Panel - Analytics'])
    def get(self, request):
        """
        **Get High-Level Analytics & Most Visited Pages**
        """
        total_views = PageViewLog.objects.count()
        unique_visitors = PageViewLog.objects.values('ip_address').distinct().count()
        total_time_spent = PageViewLog.objects.aggregate(Sum('duration_seconds'))['duration_seconds__sum'] or 0
        avg_dwell_time = PageViewLog.objects.aggregate(Avg('duration_seconds'))['duration_seconds__avg'] or 0

        # Top Visited Pages
        top_pages_qs = PageViewLog.objects.values('page_url').annotate(
            total_views=Count('id'),
            unique_visitors=Count('ip_address', distinct=True),
            total_duration=Sum('duration_seconds'),
            avg_duration=Avg('duration_seconds')
        ).order_by('-total_views')[:20]

        top_pages = []
        for p in top_pages_qs:
            top_pages.append({
                'page_url': p['page_url'],
                'total_views': p['total_views'],
                'unique_visitors': p['unique_visitors'],
                'total_duration': p['total_duration'] or 0,
                'avg_duration': round(p['avg_duration'] or 0, 1),
            })

        # Device Breakdown
        device_stats = {
            'desktop': PageViewLog.objects.filter(device_type='desktop').count(),
            'mobile': PageViewLog.objects.filter(device_type='mobile').count(),
            'tablet': PageViewLog.objects.filter(device_type='tablet').count(),
        }

        return Response({
            'success': True,
            'stats': {
                'total_pageviews': total_views,
                'unique_visitors': unique_visitors,
                'total_time_spent_seconds': total_time_spent,
                'avg_dwell_time_seconds': round(avg_dwell_time, 1),
                'top_pages': top_pages,
                'device_stats': device_stats,
            }
        }, status=status.HTTP_200_OK)


class AdminVisitorLogsView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = PageViewLogSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Admin Panel - Analytics'])
    def get(self, request):
        """
        **Get Filterable & Searchable Visitor Activity Logs**
        """
        search_query = request.query_params.get('search', '').strip()

        logs = PageViewLog.objects.select_related('user').all()

        if search_query:
            logs = logs.filter(
                Q(ip_address__icontains=search_query) |
                Q(user__email__icontains=search_query) |
                Q(user__full_name__icontains=search_query) |
                Q(page_url__icontains=search_query) |
                Q(section_name__icontains=search_query)
            )

        logs = logs[:200]  # Limit recent logs
        serializer = self.serializer_class(logs, many=True)

        return Response({
            'success': True,
            'count': len(serializer.data),
            'logs': serializer.data
        }, status=status.HTTP_200_OK)
