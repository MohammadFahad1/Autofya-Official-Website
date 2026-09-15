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

class AdminUserSerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'email', 'full_name', 'profile_picture', 'is_active', 'is_staff', 'is_superuser', 'role', 'created_at', 'last_login']
        read_only_fields = ['id', 'created_at', 'last_login']

    def get_role(self, obj):
        if obj.is_superuser or obj.is_staff:
            return 'admin'
        return 'user'

class AdminUserUpdateSerializer(serializers.ModelSerializer):
    role = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ['full_name', 'email', 'is_active', 'is_staff', 'is_superuser', 'role']
        extra_kwargs = {
            'full_name': {'required': False},
            'email': {'required': False},
            'is_active': {'required': False},
            'is_staff': {'required': False},
            'is_superuser': {'required': False},
        }

    def update(self, instance, validated_data):
        role = validated_data.pop('role', None)
        if role is not None:
            if role == 'admin':
                instance.is_staff = True
            elif role == 'user':
                instance.is_staff = False
                instance.is_superuser = False
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
