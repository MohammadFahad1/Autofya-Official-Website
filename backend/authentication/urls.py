from django.urls import path, include
from authentication import views

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('verify-otp/', views.ActivateAccountView.as_view(), name='verify-otp'),
    path('resend-activation-otp/', views.ResendActivationOTPView.as_view(), name='resend-activation-otp'),
    path('login/', views.LoginAPIView.as_view(), name='login'),
    path('forgot-password/', views.ForgotPasswordView.as_view(), name='forgot-password'),
    path('verify-forgot-password-otp/', views.VerifyForgotPasswordOTPView.as_view(), name='verify-forgot-password-otp'),
    path('reset-forgotten-password/', views.ResetForgottenPasswordView.as_view(), name='reset-forgotten-password'),
    path('profile/', views.UserProfileAPIView.as_view(), name='profile'),
    path('profile/update/', views.UpdateUserProfileAPIView.as_view(), name='update-profile'),
    path('change-password/', views.ChangePasswordAPIView.as_view(), name='change-password'),
    # Admin Panel APIs
    path('admin/stats/', views.AdminDashboardStatsView.as_view(), name='admin-stats'),
    path('admin/users/', views.AdminUserListView.as_view(), name='admin-user-list'),
    path('admin/users/<int:pk>/', views.AdminUserDetailView.as_view(), name='admin-user-detail'),
]

