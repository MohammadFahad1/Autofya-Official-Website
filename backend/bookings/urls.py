from django.urls import path
from bookings import views

urlpatterns = [
    # Public booking submission endpoint
    path('', views.CreateBookingView.as_view(), name='create-booking'),
    
    # Admin Panel endpoints
    path('admin/', views.AdminBookingListView.as_view(), name='admin-booking-list'),
    path('admin/stats/', views.AdminBookingStatsView.as_view(), name='admin-booking-stats'),
    path('admin/<int:pk>/', views.AdminBookingDetailView.as_view(), name='admin-booking-detail'),
    path('admin/<int:pk>/send-email/', views.AdminSendBookingEmailView.as_view(), name='admin-booking-send-email'),
    path('admin/send-batch-email/', views.AdminSendBatchEmailView.as_view(), name='admin-send-batch-email'),
]

