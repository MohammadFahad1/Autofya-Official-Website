import math
from rest_framework import status
from rest_framework.response import Response
from autofya.base import NewAPIView
from rest_framework.permissions import AllowAny
from authentication.permissions import IsAdminUser
from django.db.models import Q, F
from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from blogs.models import Category, BlogPost
from blogs.serializers import (
    CategorySerializer,
    BlogPostListSerializer,
    BlogPostDetailSerializer
)


class PublicCategoryListView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = CategorySerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Blogs'])
    def get(self, request):
        categories = Category.objects.all()
        serializer = self.serializer_class(categories, many=True)
        return Response({
            'success': True,
            'categories': serializer.data
        }, status=status.HTTP_200_OK)


class PublicBlogListView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = BlogPostListSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Blogs'])
    def get(self, request):
        category_slug = request.query_params.get('category', '').strip()
        search_query = request.query_params.get('search', '').strip()
        page = request.query_params.get('page', 1)
        page_size = request.query_params.get('page_size', 6)

        try:
            page = max(1, int(page))
        except (ValueError, TypeError):
            page = 1

        try:
            page_size = max(1, min(50, int(page_size)))
        except (ValueError, TypeError):
            page_size = 6

        posts = BlogPost.objects.filter(is_published=True).select_related('category')

        if category_slug and category_slug.lower() != 'all':
            posts = posts.filter(category__slug=category_slug)

        if search_query:
            posts = posts.filter(
                Q(title__icontains=search_query) |
                Q(excerpt__icontains=search_query) |
                Q(content__icontains=search_query)
            )

        total_count = posts.count()
        total_pages = math.ceil(total_count / page_size) if total_count > 0 else 1

        start = (page - 1) * page_size
        end = start + page_size
        paginated_posts = posts[start:end]

        serializer = self.serializer_class(paginated_posts, many=True)

        return Response({
            'success': True,
            'count': total_count,
            'total_pages': total_pages,
            'current_page': page,
            'page_size': page_size,
            'posts': serializer.data
        }, status=status.HTTP_200_OK)


class PublicBlogDetailView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = BlogPostDetailSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Blogs'])
    def get(self, request, slug):
        post = get_object_or_404(BlogPost, slug=slug, is_published=True)
        # Increment views count
        BlogPost.objects.filter(pk=post.pk).update(views_count=F('views_count') + 1)
        post.refresh_from_db()
        serializer = self.serializer_class(post)

        # Related posts in same category
        related_posts = BlogPost.objects.filter(
            category=post.category, is_published=True
        ).exclude(id=post.id)[:3]
        related_serializer = BlogPostListSerializer(related_posts, many=True)

        return Response({
            'success': True,
            'post': serializer.data,
            'related_posts': related_serializer.data
        }, status=status.HTTP_200_OK)


# Admin CMS Views
class AdminCategoryListCreateView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = CategorySerializer
    http_method_names = ['get', 'post']

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def get(self, request):
        categories = Category.objects.all()
        serializer = self.serializer_class(categories, many=True)
        return Response({'success': True, 'categories': serializer.data}, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            cat = serializer.save()
            return Response({
                'success': True,
                'message': 'Category created successfully.',
                'category': self.serializer_class(cat).data
            }, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class AdminCategoryDetailView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = CategorySerializer
    http_method_names = ['patch', 'delete']

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def patch(self, request, pk):
        category = get_object_or_404(Category, pk=pk)
        serializer = self.serializer_class(category, data=request.data, partial=True)
        if serializer.is_valid():
            cat = serializer.save()
            return Response({
                'success': True,
                'message': 'Category updated successfully.',
                'category': self.serializer_class(cat).data
            }, status=status.HTTP_200_OK)
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def delete(self, request, pk):
        category = get_object_or_404(Category, pk=pk)
        category.delete()
        return Response({'success': True, 'message': 'Category deleted successfully.'}, status=status.HTTP_200_OK)


class AdminBlogPostListCreateView(NewAPIView):
    permission_classes = [IsAdminUser]
    parser_classes = [MultiPartParser, FormParser, JSONParser]
    serializer_class = BlogPostDetailSerializer
    http_method_names = ['get', 'post']

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def get(self, request):
        search_query = request.query_params.get('search', '').strip()
        category_id = request.query_params.get('category_id', '').strip()

        posts = BlogPost.objects.all().select_related('category')
        if search_query:
            posts = posts.filter(
                Q(title__icontains=search_query) |
                Q(excerpt__icontains=search_query)
            )
        if category_id:
            posts = posts.filter(category_id=category_id)

        serializer = BlogPostListSerializer(posts, many=True, context={'request': request})
        return Response({'success': True, 'posts': serializer.data}, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def post(self, request):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        if serializer.is_valid():
            post = serializer.save(author=request.user)
            return Response({
                'success': True,
                'message': 'Blog article created successfully.',
                'post': self.serializer_class(post, context={'request': request}).data
            }, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class AdminBlogPostDetailView(NewAPIView):
    permission_classes = [IsAdminUser]
    parser_classes = [MultiPartParser, FormParser, JSONParser]
    serializer_class = BlogPostDetailSerializer
    http_method_names = ['get', 'patch', 'delete']

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def get(self, request, pk):
        post = get_object_or_404(BlogPost, pk=pk)
        serializer = self.serializer_class(post, context={'request': request})
        return Response({'success': True, 'post': serializer.data}, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def patch(self, request, pk):
        post = get_object_or_404(BlogPost, pk=pk)
        serializer = self.serializer_class(post, data=request.data, partial=True, context={'request': request})
        if serializer.is_valid():
            updated_post = serializer.save()
            return Response({
                'success': True,
                'message': 'Blog article updated successfully.',
                'post': self.serializer_class(updated_post, context={'request': request}).data
            }, status=status.HTTP_200_OK)
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(tags=['Admin Panel - Blogs'])
    def delete(self, request, pk):
        post = get_object_or_404(BlogPost, pk=pk)
        post.delete()
        return Response({'success': True, 'message': 'Blog article deleted successfully.'}, status=status.HTTP_200_OK)
