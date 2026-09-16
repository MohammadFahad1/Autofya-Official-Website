from django.urls import path
from blogs.views import (
    PublicCategoryListView,
    PublicBlogListView,
    PublicBlogDetailView,
    AdminCategoryListCreateView,
    AdminCategoryDetailView,
    AdminBlogPostListCreateView,
    AdminBlogPostDetailView,
)

urlpatterns = [
    # Public endpoints
    path('', PublicBlogListView.as_view(), name='public-blog-list'),
    path('categories/', PublicCategoryListView.as_view(), name='public-category-list'),
    path('<slug:slug>/', PublicBlogDetailView.as_view(), name='public-blog-detail'),

    # Admin endpoints
    path('admin/categories/', AdminCategoryListCreateView.as_view(), name='admin-category-list-create'),
    path('admin/categories/<int:pk>/', AdminCategoryDetailView.as_view(), name='admin-category-detail'),
    path('admin/posts/', AdminBlogPostListCreateView.as_view(), name='admin-blog-list-create'),
    path('admin/posts/<int:pk>/', AdminBlogPostDetailView.as_view(), name='admin-blog-detail'),
]
