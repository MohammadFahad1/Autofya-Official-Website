from rest_framework import serializers
from analytics.models import PageViewLog


class PageViewLogSerializer(serializers.ModelSerializer):
    user_email = serializers.SerializerMethodField(read_only=True)
    user_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = PageViewLog
        fields = [
            'id', 'session_id', 'ip_address', 'user_agent', 'device_type',
            'page_url', 'page_title', 'section_name', 'duration_seconds',
            'user', 'user_email', 'user_name', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_user_email(self, obj):
        return obj.user.email if obj.user else None

    def get_user_name(self, obj):
        return obj.user.full_name if obj.user and obj.user.full_name else None
