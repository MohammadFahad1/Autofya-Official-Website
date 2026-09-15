from celery import shared_task
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives
from bookings.models import Booking

@shared_task
def send_booking_confirmation_email(booking_id):
    try:
        booking = Booking.objects.get(id=booking_id)
    except Booking.DoesNotExist:
        return f"Booking with id {booking_id} does not exist."

    subject = f"Scheduled: {booking.meeting_title} - {booking.date}"
    from_email = settings.EMAIL_HOST_USER or "no-reply@autofya.com"

    # Recipients: Client email + any additional guest emails
    recipients = [booking.email]
    if isinstance(booking.guest_emails, list):
        for g_email in booking.guest_emails:
            if g_email and isinstance(g_email, str) and g_email.strip() and g_email not in recipients:
                recipients.append(g_email.strip())

    context = {"booking": booking}
    html_content = render_to_string("booking_confirmation_template.html", context)
    text_content = strip_tags(html_content)

    try:
        msg = EmailMultiAlternatives(
            subject,
            text_content,
            from_email,
            recipients
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        return f"Booking confirmation email sent to {', '.join(recipients)}"
    except Exception as e:
        return f"Error sending booking confirmation email: {e}"
