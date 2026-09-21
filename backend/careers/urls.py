from django.urls import path
from .views import (
    PublicJobListView,
    PublicJobApplyView,
    AdminJobListCreateView,
    AdminJobDetailView,
    AdminApplicationListView,
    AdminApplicationDetailView,
)

urlpatterns = [
    path('jobs/', PublicJobListView.as_view(), name='public-job-list'),
    path('jobs/<int:job_id>/apply/', PublicJobApplyView.as_view(), name='public-job-apply'),
    path('admin/jobs/', AdminJobListCreateView.as_view(), name='admin-job-list-create'),
    path('admin/jobs/<int:pk>/', AdminJobDetailView.as_view(), name='admin-job-detail'),
    path('admin/applications/', AdminApplicationListView.as_view(), name='admin-application-list'),
    path('admin/applications/<int:pk>/', AdminApplicationDetailView.as_view(), name='admin-application-detail'),
]
