from rest_framework import serializers
from django.utils import timezone
from datetime import timedelta
from analytics.models import PageViewLog


class PageViewLogSerializer(serializers.ModelSerializer):
    user_email = serializers.SerializerMethodField(read_only=True)
    user_name = serializers.SerializerMethodField(read_only=True)
    is_live = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = PageViewLog
        fields = [
            'id', 'session_id', 'ip_address', 'user_agent', 'device_type',
            'page_url', 'page_title', 'section_name', 'duration_seconds',
            'user', 'user_email', 'user_name', 'is_live', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_user_email(self, obj):
        return obj.user.email if obj.user else None

    def get_user_name(self, obj):
        return obj.user.full_name if obj.user and obj.user.full_name else None

    def get_is_live(self, obj):
        if not obj.updated_at:
            return False
        return (timezone.now() - obj.updated_at) < timedelta(seconds=30)
