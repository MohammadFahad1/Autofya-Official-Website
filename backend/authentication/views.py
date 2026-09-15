import random
import uuid
from rest_framework import status
from rest_framework.response import Response
from autofya.base import NewAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from authentication import serializers
from django.contrib.auth import authenticate, get_user_model
from django.utils import timezone
from django.db import transaction
from datetime import timedelta
from rest_framework_simplejwt.tokens import RefreshToken
from drf_yasg.utils import swagger_auto_schema
from authentication.tasks import send_activation_otp_email, send_reset_otp_email
from django.core.validators import validate_email
from django.contrib.auth.password_validation import validate_password
from django.shortcuts import get_object_or_404


User = get_user_model()

class RegisterView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = serializers.UserRegistrationSerializer
    http_method_names = ['post']
    
    @swagger_auto_schema(tags=['Authentication'])
    def post(self, request):
        """
        **Register a new user**\n
        This endpoint allows you to register a new user.\n
        
        **Request Body**\n
        - email (string, required): The email address of the user.
        - password (string, required): The password for the user.
        
        **Response**\n
        - success (boolean): Indicates if the registration was successful.
        - message (string): A message indicating the result of the registration.
        
        **Status Codes**\n
        - 201 Created: User registered successfully.
        - 400 Bad Request: Invalid input or missing fields.
        
        **Example Request**\n
        ```json
        {
            "email": "9B0H4@example.com",
            "password": "password123"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "User registered successfully, An OTP has been sent to your email."
        }
        ```
        """
        serializer = self.serializer_class(data=request.data)
        if not serializer.initial_data.get('email') or not serializer.initial_data.get('password'):
            return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        email = serializer.initial_data.get('email')
        password = serializer.initial_data.get('password')
        
        try:
            validate_email(email)
        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            validate_password(password, user=None)
        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        if serializer.is_valid():
            try:
                with transaction.atomic():
                    user = serializer.save()
                    otp = str(random.randint(100000, 999999))
                    user.otp = otp
                    user.forgot_password_token = None
                    user.otp_created_at = timezone.now() + timedelta(minutes=15)
                    user.is_active = False
                    user.save()
                    send_activation_otp_email.delay(user.email, otp)
                return Response({
                    'success': True,
                    'message': 'User registered successfully, An OTP has been sent to your email.'
                }, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({
                                'success': False,
                                'message': f'An error occurred during registration: {e}'
                                }, status=status.HTTP_400_BAD_REQUEST)
        return Response({
            'success': False,
            'message': f'Invalid input. Please check the provided data. Errors: {serializer.errors}'
            }, status=status.HTTP_400_BAD_REQUEST)


class ActivateAccountView(NewAPIView):
    serializer_class = serializers.EmailOTPSerializer
    permission_classes = [AllowAny]
    http_method_names = ['post']
    
    @swagger_auto_schema(tags=['Authentication'])
    def post(self, request):
        """
        **Activate User Account**\n
        This endpoint allows users to activate their account using the OTP sent to their email during registration.\n
        
        **Request Body**\n
        - email (string, required): The email address of the user.
        - otp (string, required): The OTP sent to the user's email.
        
        **Response**\n
        - success (boolean): Indicates if the account activation was successful.
        - message (string): A message indicating the result of the activation.
        
        **Status Codes**\n
        - 200 OK: Account activated successfully.
        - 400 Bad Request: Invalid input, missing fields, or incorrect OTP.
        
        **Example Request**\n
        ```json
        {
            "email": "9B0H4@example.com",
            "otp": "123456"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "Account activated successfully.",
            "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.",
            "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.",
            "user_id": 1,
            "full_name": "John Doe",
            "profile_picture": "https://example.com/profile_picture.jpg",
            "email": "9B0H4@example.com",
            "role": "user"
        }
        """
        email = request.data.get('email')
        otp = request.data.get('otp')
        
        if not email or not otp:
            return Response({'success': False, 'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(email=email)
            if user.otp != otp:
                return Response({'success': False, 'message': 'Invalid OTP.'}, status=status.HTTP_400_BAD_REQUEST)
            if user.otp_created_at + timedelta(minutes=15) < timezone.now():
                user.otp = None
                user.otp_created_at = None
                user.save()
                return Response({
                        'success': False,
                        'message': 'OTP has expired. Please request a new one.'
                    }, status=status.HTTP_400_BAD_REQUEST)
            
            user.is_active = True
            user.otp = None
            user.otp_created_at = None
            user.save()
            
            response = {
                'success': True,
                'message': 'Account activated successfully.',
                'user_id': user.id,
                "full_name": user.full_name,
                "profile_picture": request.build_absolute_uri(user.profile_picture.url) if user.profile_picture else None,
                'email': user.email,
                'role': 'admin' if user.is_superuser else 'user',
            }
            
            return Response(response, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'success': False, 'message': 'User with this email does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({
                            'success': False,
                            'message': f'An error occurred during account activation: {e}'
                            }, status=status.HTTP_400_BAD_REQUEST)


class ResendActivationOTPView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = serializers.EmailFieldSerializer
    http_method_names = ['post']
    
    @swagger_auto_schema(tags=['Authentication'])
    def post(self, request):
        """
        **Resend Activation OTP**\n
        This endpoint allows users to request a new OTP for account activation if the previous one has expired or was not received.\n
        
        **Request Body**\n
        - email (string, required): The email address of the user.
        
        **Response**\n
        - success (boolean): Indicates if the OTP was resent successfully.
        - message (string): A message indicating the result of the OTP resend request.
        
        **Status Codes**\n
        - 200 OK: OTP resent successfully.
        - 400 Bad Request: Invalid input or missing fields.
        
        **Example Request**\n
        ```json
        {
            "email": "9B0H4@example.com"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "An OTP has been sent to your email."
        }
        """
        email = request.data.get('email')
        if not email:
            return Response({'success': False, 'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(email=email)
            if user.is_active:
                return Response({'success': False, 'message': 'Account is already active.'}, status=status.HTTP_400_BAD_REQUEST)
            if user.otp_created_at and user.otp_created_at + timedelta(minutes=1) > timezone.now():
                return Response({
                    'success': False,
                    'message': 'An OTP has already been sent recently. Please wait for 1 minute before requesting a new one.'
                }, status=status.HTTP_400_BAD_REQUEST)
            otp = str(random.randint(100000, 999999))
            user.otp = otp
            user.otp_created_at = timezone.now()
            user.save()
            send_activation_otp_email.delay(user.email, otp)
            return Response({
                'success': True,
                'message': 'An OTP has been sent to your email.'
            }, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'success': False, 'message': 'User with this email does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({
                'success': False,
                'message': f'An error occurred during OTP resend: {e}'
            }, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = serializers.UserLoginSerializer
    http_method_names = ['post']
    
    @swagger_auto_schema(tags=['Authentication'])
    def post(self, request):
        """
        **User Login**\n
        This endpoint allows users to log in to their account using their email and password.\n
        
        **Request Body**\n
        - email (string, required): The email address of the user.
        - password (string, required): The password for the user.
        
        **Response**\n
        - success (boolean): Indicates if the login was successful.
        - message (string): A message indicating the result of the login attempt.
        - access (string): JWT access token for authenticated requests.
        - refresh (string): JWT refresh token for obtaining new access tokens.
        
        **Status Codes**\n
        - 200 OK: Login successful.
        - 400 Bad Request: Invalid input, missing fields, or incorrect credentials.
        
        **Example Request**\n
        ```json
        {
            "email": "9B0H4@example.com",
            "password": "password123"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "Login successful.",
            "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.",
            "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.",
            "user_id": 1,
            "full_name": "John Doe",
            "profile_picture": "https://example.com/profile_picture.jpg",
            "email": "9B0H4@example.com",
            "role": "user"
        }
        """
        email = request.data.get('email')
        password = request.data.get('password')
        if not email or not password:
            return Response({'success': False, 'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = authenticate(email=email, password=password)
        if user is not None:
            if not user.is_active:
                return Response({'success': False, 'message': 'Account is not active. Please activate your account first.'}, status=status.HTTP_400_BAD_REQUEST)
            refresh = RefreshToken.for_user(user)
            respose = {
                'success': True,
                'message': 'Login successful.',
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'user_id': user.id,
                'full_name': user.full_name,
                'profile_picture': request.build_absolute_uri(user.profile_picture.url) if user.profile_picture else None,
                'email': user.email,
                'role': 'admin' if user.is_superuser else 'user',
            }
            return Response(respose, status=status.HTTP_200_OK)
        return Response({'success': False, 'message': 'Invalid email or password.'}, status = status.HTTP_400_BAD_REQUEST)


class ForgotPasswordView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = serializers.EmailFieldSerializer
    http_method_names = ['post']
    
    @swagger_auto_schema(tags=['Authentication'])
    def post(self, request):
        """
        **Forgot Password Request**\n
        This endpoint allows users to request a password reset by providing their email address. An OTP will be sent to the user's email for password reset verification.\n
        
        **Request Body**\n
        - email (string, required): The email address of the user.
        
        **Response**\n
        - success (boolean): Indicates if the password reset request was successful.
        - message (string): A message indicating the result of the password reset request.
        
        **Status Codes**\n
        - 200 OK: Password reset OTP sent successfully.
        - 400 Bad Request: Invalid input or missing fields.
        
        **Example Request**\n
        ```json
        {
            "email": "9B0H4@example.com"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "Password reset OTP sent successfully."
        }
        """
        email = request.data.get('email')
        if not email:
            return Response({'success': False, 'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            validate_email(email)
        except Exception as e:
            return Response({'success': False, 'message': 'Enter a valid email address.'}, status=status.HTTP_400_BAD_REQUEST)
        
        otp = str(random.randint(100000, 999999))
        user = get_object_or_404(User, email=email)
        user.otp = otp
        user.otp_created_at = timezone.now()
        user.forgot_password_token = str(uuid.uuid4())
        user.save()
        send_reset_otp_email.delay(email, otp)
        return Response({'success': True, 'message': 'Password reset OTP sent successfully.'}, status=status.HTTP_200_OK)


class VerifyForgotPasswordOTPView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = serializers.EmailOTPSerializer
    http_method_names = ['post']
    
    @swagger_auto_schema(tags=['Authentication'])
    def post(self, request):
        """
        **Verify Forgot Password OTP**\n
        This endpoint allows users to verify the OTP sent to their email for password reset. Upon successful verification, a token will be provided to the user for resetting their password.\n
        
        **Request Body**\n
        - email (string, required): The email address of the user.
        - otp (string, required): The OTP sent to the user's email for password reset.
        
        **Response**\n
        - success (boolean): Indicates if the OTP verification was successful.
        - message (string): A message indicating the result of the OTP verification.
        - forgot_password_token (string): A token that can be used for resetting the password if OTP verification is successful.
        
        **Status Codes**\n
        - 200 OK: OTP verified successfully.
        - 400 Bad Request: Invalid input, missing fields, or incorrect/expired OTP.
        
        **Example Request**\n
        ```json
        {
            "email": "9B0H4@example.com",
            "otp": "123456"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "OTP verified successfully.",
            "email": "9B0H4@example.com",
            "forgot_password_token": "your-forgot-password-token"
        }
        """
        email = request.data.get('email')
        otp = request.data.get('otp')
        if not email or not otp:
            return Response({'success': False, 'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        user = get_object_or_404(User, email=email)
        if user.otp != otp:
            return Response({'success': False, 'message': 'Incorrect OTP.'}, status=status.HTTP_400_BAD_REQUEST)
        if user.otp_created_at + timedelta(minutes=15) < timezone.now():
            user.otp = None
            user.otp_created_at = None
            user.forgot_password_token = None
            user.save()
            return Response({'success': False, 'message': 'OTP has expired.'}, status=status.HTTP_400_BAD_REQUEST)
        
        user.otp = None
        user.otp_created_at = None
        user.save()
        return Response({'success': True, 'message': 'OTP verified successfully.', 'email': user.email, 'forgot_password_token': user.forgot_password_token}, status=status.HTTP_200_OK)


class ResetForgottenPasswordView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = serializers.ResetPasswordSerializer
    http_method_names = ['post']
    
    @swagger_auto_schema(tags=['Authentication'])
    def post(self, request):
        """
        **Reset Forgotten Password**\n
        This endpoint allows users to reset their password after verifying the OTP for password reset. Users need to provide their email, the forgot password token received after OTP verification, and the new password.\n
        
        **Request Body**\n
        - email (string, required): The email address of the user.
        - forgot_password_token (string, required): The token received after successful OTP verification for password reset.
        - new_password (string, required): The new password that the user wants to set.
        
        **Response**\n
        - success (boolean): Indicates if the password reset was successful.
        - message (string): A message indicating the result of the password reset attempt.
        
        **Status Codes**\n
        - 200 OK: Password reset successful.
        - 400 Bad Request: Invalid input, missing fields, incorrect token, or weak new password.
        
        **Example Request**\n
        ```json
        {
            "email": "9B0H4@example.com",
            "forgot_password_token": "your-forgot-password-token",
            "new_password": "newpassword123"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "Password reset successful."
        }
        """
        email = request.data.get('email')
        forgot_password_token = request.data.get('forgot_password_token')
        new_password = request.data.get('new_password')
        if not email or not forgot_password_token or not new_password:
            return Response({'success': False, 'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        user = get_object_or_404(User, email=email)
        if user.forgot_password_token != forgot_password_token:
            return Response({'success': False, 'message': 'Invalid forgot password token.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            validate_password(new_password, user=user)
        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        user.set_password(new_password)
        user.forgot_password_token = None
        user.save()
        return Response({'success': True, 'message': 'Password reset successful.'}, status=status.HTTP_200_OK)


class UserProfileAPIView(NewAPIView):
    serializer_class = serializers.EmptySerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['get']
    
    @swagger_auto_schema(tags=['Authentication'])
    def get(self, request):
        """
        **Get User Profile**\n
        This endpoint allows authenticated users to retrieve their profile information, including email and role.\n
        
        **Response**\n
        - success (boolean): Indicates if the profile retrieval was successful.
        - email (string): The email address of the user.
        - role (string): The role of the user (e.g., "admin" or "user").
        
        **Status Codes**\n
        - 200 OK: Profile retrieved successfully.
        - 401 Unauthorized: User is not authenticated.
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "Profile retrieved successfully.",
            "user_id": 1,
            "full_name": "John Doe",
            "profile_picture": "https://example.com/profile_picture.jpg",
            "email": "9B0H4@example.com",
            "role": "user"
        }
        """
        user = request.user
        response = {
            'success': True,
            'message': 'Profile retrieved successfully.',
            'user_id': user.id,
            'full_name': user.full_name,
            'profile_picture': request.build_absolute_uri(user.profile_picture.url) if user.profile_picture else None,
            'email': user.email,
            'role': 'admin' if user.is_superuser else 'user',
        }
        return Response(response , status=status.HTTP_200_OK)


class ChangePasswordAPIView(NewAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.ChangePasswordSerializer
    http_method_names = ['post']
    
    @swagger_auto_schema(tags=['Authentication'])
    def post(self, request):
        """
        **Change Password**\n
        This endpoint allows authenticated users to change their password by providing their current password and a new password.\n
        
        **Request Body**\n
        - current_password (string, required): The user's current password.
        - new_password (string, required): The new password that the user wants to set.
        
        **Response**\n
        - success (boolean): Indicates if the password change was successful.
        - message (string): A message indicating the result of the password change attempt.
        
        **Status Codes**\n
        - 200 OK: Password changed successfully.
        - 400 Bad Request: Invalid input, missing fields, incorrect current password, or weak new password.
        - 401 Unauthorized: User is not authenticated.
        
        **Example Request**\n
        ```json
        {
            "current_password": "oldpassword123",
            "new_password": "newpassword123"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "Password changed successfully."
        }
        ```
        """
        user = request.user
        current_password = request.data.get('current_password')
        new_password = request.data.get('new_password')
        
        if not current_password or not new_password:
            return Response({'success': False, 'message': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not user.check_password(current_password):
            return Response({'success': False, 'message': 'Current password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            validate_password(new_password, user=user)
        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        user.set_password(new_password)
        user.save()
        
        return Response({'success': True, 'message': 'Password changed successfully.'}, status=status.HTTP_200_OK)


class UpdateUserProfileAPIView(NewAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.UpdateUserProfileSerializer
    http_method_names = ['patch']
    
    @swagger_auto_schema(tags=['Authentication'])
    def patch(self, request):
        """
        **Update User Profile**\n
        This endpoint allows authenticated users to update their profile information, including full name and profile picture.\n
        
        **Request Body**\n
        - full_name (string, optional): The new full name of the user.
        - profile_picture (file, optional): The new profile picture of the user.
        
        **Response**\n
        - success (boolean): Indicates if the profile update was successful.
        - message (string): A message indicating the result of the profile update attempt.
        - full_name (string): The updated full name of the user.
        - profile_picture (string or null): The URL of the updated profile picture, or null if not provided.
        
        **Status Codes**\n
        - 200 OK: Profile updated successfully.
        - 400 Bad Request: Invalid input or missing fields.
        - 401 Unauthorized: User is not authenticated.
        
        **Example Request**\n
        ```json
        {
            "full_name": "John Doe",
            "profile_picture": "file.jpg"
        }
        ```
        
        **Example Response**\n
        ```json
        {
            "success": true,
            "message": "Profile updated successfully.",
            "user_id": 1,
            "full_name": "John Doe",
            "profile_picture": "https://example.com/profile_picture.jpg",
            "email": "9B0H4@example.com",
            "role": "user",
        }
        ```
        """
        user = request.user
        full_name = request.data.get('full_name')
        profile_picture = request.FILES.get('profile_picture')
        
        if full_name:
            user.full_name = full_name
        
        if profile_picture:
            user.profile_picture = profile_picture
        
        serializer = self.serializer_class(data=request.data)
        if not serializer.is_valid():
            return Response({
                'success': False,
                'message': f'Invalid input. Please check the provided data. Errors: {serializer.errors}'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        user.save()
        
        return Response({
            'success': True,
            'message': 'Profile updated successfully.',
            'full_name': user.full_name,
            'profile_picture': request.build_absolute_uri(user.profile_picture.url) if user.profile_picture else None,
            'email': user.email,
            'role': 'admin' if user.is_superuser else 'user',
        }, status=status.HTTP_200_OK)


