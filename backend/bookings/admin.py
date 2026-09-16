from django.contrib import admin, messages
from django.shortcuts import render
from django.http import HttpResponseRedirect
from bookings.models import Booking
from bookings.tasks import send_custom_booking_email


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company_name', 'date', 'time_slot', 'status', 'created_at')
    list_filter = ('status', 'created_at', 'timezone', 'engagement_type')
    search_fields = ('name', 'email', 'company_name', 'phone', 'must_work_notes')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    actions = ['send_email_to_selected']

    @admin.action(description="Send Custom Email to Selected Bookings")
    def send_email_to_selected(self, request, queryset):
        selected_ids = list(queryset.values_list('id', flat=True))
        if 'apply' in request.POST:
            subject = request.POST.get('subject', '').strip()
            message = request.POST.get('message', '').strip()

            if not subject or not message:
                self.message_user(request, "Subject and Message are required.", level=messages.ERROR)
                return HttpResponseRedirect(request.get_full_path())

            count = 0
            for booking_id in selected_ids:
                send_custom_booking_email.delay(booking_id, subject, message)
                count += 1

            self.message_user(request, f"Successfully queued custom email to {count} booking(s).", level=messages.SUCCESS)
            return HttpResponseRedirect(request.get_full_path())

        return render(
            request,
            'admin/send_custom_email.html',
            context={'bookings': queryset, 'selected_ids': selected_ids}
        )
