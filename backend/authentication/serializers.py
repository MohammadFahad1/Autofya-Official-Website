from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class EmptySerializer(serializers.Serializer):
    pass

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    
    class Meta:
        model = User
        fields = ['full_name', 'profile_picture', 'email', 'password']
        
        extra_kwargs = {
            'full_name': { 'read_only': True },
            'profile_picture': { 'read_only': True },
        }
    
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class EmailOTPSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    otp = serializers.CharField(required=True, max_length=6)

class EmailFieldSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    forgot_password_token = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, write_only=True, style={'input_type': 'password'})


class ChangePasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField(required=True, write_only=True, style={'input_type': 'password'})
    new_password = serializers.CharField(required=True, write_only=True, style={'input_type': 'password'})


class UpdateUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['full_name', 'profile_picture']
        extra_kwargs = {
            'full_name': { 'required': False },
            'profile_picture': { 'required': False },
        }