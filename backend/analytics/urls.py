from django.urls import path
from analytics import views

urlpatterns = [
    # Public tracking endpoint
    path('track/', views.TrackPageViewView.as_view(), name='analytics-track'),

    # Admin endpoints
    path('admin/stats/', views.AdminAnalyticsStatsView.as_view(), name='admin-analytics-stats'),
    path('admin/logs/', views.AdminVisitorLogsView.as_view(), name='admin-analytics-logs'),
]
