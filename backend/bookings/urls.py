from django.urls import path
from bookings import views

urlpatterns = [
    # Public booking submission endpoint
    path('', views.CreateBookingView.as_view(), name='create-booking'),
    path('contact/', views.CreateContactSubmissionView.as_view(), name='create-contact'),
    
    # Admin Panel endpoints for Bookings
    path('admin/', views.AdminBookingListView.as_view(), name='admin-booking-list'),
    path('admin/stats/', views.AdminBookingStatsView.as_view(), name='admin-booking-stats'),
    path('admin/<int:pk>/', views.AdminBookingDetailView.as_view(), name='admin-booking-detail'),
    path('admin/<int:pk>/send-email/', views.AdminSendBookingEmailView.as_view(), name='admin-booking-send-email'),
    path('admin/send-batch-email/', views.AdminSendBatchEmailView.as_view(), name='admin-send-batch-email'),

    # Admin Panel endpoints for Contacts
    path('contacts/admin/', views.AdminContactListView.as_view(), name='admin-contact-list'),
    path('contacts/admin/stats/', views.AdminContactStatsView.as_view(), name='admin-contact-stats'),
    path('contacts/admin/<int:pk>/', views.AdminContactDetailView.as_view(), name='admin-contact-detail'),
    path('contacts/admin/<int:pk>/reply/', views.AdminSendContactReplyView.as_view(), name='admin-contact-reply'),
]


