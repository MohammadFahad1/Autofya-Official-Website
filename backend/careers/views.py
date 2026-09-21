from rest_framework import status
from rest_framework.response import Response
from autofya.base import NewAPIView
from rest_framework.permissions import AllowAny
from authentication.permissions import IsAdminUser
from django.shortcuts import get_object_or_404
from django.db.models import Q
from drf_yasg.utils import swagger_auto_schema
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from .models import JobPosition, JobApplication
from .serializers import JobPositionSerializer, JobApplicationSerializer


class PublicJobListView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = JobPositionSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Careers'])
    def get(self, request):
        jobs = JobPosition.objects.filter(is_active=True)
        serializer = self.serializer_class(jobs, many=True)
        return Response({
            'success': True,
            'count': jobs.count(),
            'jobs': serializer.data
        }, status=status.HTTP_200_OK)


class PublicJobApplyView(NewAPIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser, JSONParser]
    serializer_class = JobApplicationSerializer
    http_method_names = ['post']

    @swagger_auto_schema(tags=['Careers'])
    def post(self, request, job_id):
        job = get_object_or_404(JobPosition, pk=job_id, is_active=True)
        data = request.data.copy()
        data['job'] = job.id

        serializer = self.serializer_class(data=data, context={'request': request})
        if serializer.is_valid():
            application = serializer.save()
            return Response({
                'success': True,
                'message': 'Application submitted successfully.',
                'application': self.serializer_class(application, context={'request': request}).data
            }, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


# Admin Panel Views for Managing Job Positions & Applications
class AdminJobListCreateView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = JobPositionSerializer
    http_method_names = ['get', 'post']

    @swagger_auto_schema(tags=['Admin Panel - Careers'])
    def get(self, request):
        search_query = request.query_params.get('search', '').strip()
        jobs = JobPosition.objects.all()

        if search_query:
            jobs = jobs.filter(
                Q(title__icontains=search_query) |
                Q(category__icontains=search_query) |
                Q(type__icontains=search_query)
            )

        serializer = self.serializer_class(jobs, many=True)
        total_jobs = JobPosition.objects.count()
        active_jobs = JobPosition.objects.filter(is_active=True).count()
        total_applications = JobApplication.objects.count()

        return Response({
            'success': True,
            'stats': {
                'total_jobs': total_jobs,
                'active_jobs': active_jobs,
                'total_applications': total_applications,
            },
            'jobs': serializer.data
        }, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['Admin Panel - Careers'])
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            job = serializer.save()
            return Response({
                'success': True,
                'message': 'Job position created successfully.',
                'job': self.serializer_class(job).data
            }, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class AdminJobDetailView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = JobPositionSerializer
    http_method_names = ['get', 'patch', 'delete']

    @swagger_auto_schema(tags=['Admin Panel - Careers'])
    def get(self, request, pk):
        job = get_object_or_404(JobPosition, pk=pk)
        serializer = self.serializer_class(job)
        return Response({'success': True, 'job': serializer.data}, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['Admin Panel - Careers'])
    def patch(self, request, pk):
        job = get_object_or_404(JobPosition, pk=pk)
        serializer = self.serializer_class(job, data=request.data, partial=True)
        if serializer.is_valid():
            updated_job = serializer.save()
            return Response({
                'success': True,
                'message': 'Job position updated successfully.',
                'job': self.serializer_class(updated_job).data
            }, status=status.HTTP_200_OK)
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(tags=['Admin Panel - Careers'])
    def delete(self, request, pk):
        job = get_object_or_404(JobPosition, pk=pk)
        job.delete()
        return Response({'success': True, 'message': 'Job position deleted successfully.'}, status=status.HTTP_200_OK)


class AdminApplicationListView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = JobApplicationSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Admin Panel - Careers'])
    def get(self, request):
        job_id = request.query_params.get('job_id', '').strip()
        search_query = request.query_params.get('search', '').strip()

        apps = JobApplication.objects.all().select_related('job')
        if job_id:
            apps = apps.filter(job_id=job_id)
        if search_query:
            apps = apps.filter(
                Q(name__icontains=search_query) |
                Q(email__icontains=search_query) |
                Q(phone_number__icontains=search_query) |
                Q(education__icontains=search_query) |
                Q(job__title__icontains=search_query)
            )

        serializer = self.serializer_class(apps, many=True, context={'request': request})
        return Response({'success': True, 'applications': serializer.data}, status=status.HTTP_200_OK)


class AdminApplicationDetailView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = JobApplicationSerializer
    http_method_names = ['patch', 'delete']

    @swagger_auto_schema(tags=['Admin Panel - Careers'])
    def patch(self, request, pk):
        app_obj = get_object_or_404(JobApplication, pk=pk)
        serializer = self.serializer_class(app_obj, data=request.data, partial=True, context={'request': request})
        if serializer.is_valid():
            updated_app = serializer.save()
            return Response({
                'success': True,
                'message': 'Application status updated.',
                'application': self.serializer_class(updated_app, context={'request': request}).data
            }, status=status.HTTP_200_OK)
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(tags=['Admin Panel - Careers'])
    def delete(self, request, pk):
        app_obj = get_object_or_404(JobApplication, pk=pk)
        app_obj.delete()
        return Response({'success': True, 'message': 'Application and resume file deleted successfully.'}, status=status.HTTP_200_OK)

