from rest_framework import serializers
from bookings.models import Booking

class BookingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = [
            'id', 'meeting_title', 'date', 'time_slot', 'timezone',
            'name', 'email', 'guest_emails', 'phone', 'company_name',
            'role', 'situation', 'investment_range', 'engagement_type',
            'outcomes', 'hear_about_us', 'must_work_notes', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']


class BookingAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']
