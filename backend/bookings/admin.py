from django.contrib import admin
from bookings.models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company_name', 'date', 'time_slot', 'status', 'created_at')
    list_filter = ('status', 'created_at', 'timezone', 'engagement_type')
    search_fields = ('name', 'email', 'company_name', 'phone', 'must_work_notes')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
