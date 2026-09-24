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

@shared_task
def send_booking_status_update_email(booking_id, old_status, new_status):
    try:
        booking = Booking.objects.get(id=booking_id)
    except Booking.DoesNotExist:
        return f"Booking with id {booking_id} does not exist."

    subject = f"Booking Status Updated ({new_status.capitalize()}): {booking.meeting_title} - {booking.date}"
    from_email = settings.EMAIL_HOST_USER or "no-reply@autofya.com"

    # Recipients: Client email + any additional guest emails
    recipients = [booking.email]
    if isinstance(booking.guest_emails, list):
        for g_email in booking.guest_emails:
            if g_email and isinstance(g_email, str) and g_email.strip() and g_email not in recipients:
                recipients.append(g_email.strip())

    context = {
        "booking": booking,
        "old_status": old_status,
        "new_status": new_status,
    }
    html_content = render_to_string("booking_status_update_template.html", context)
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
        return f"Booking status update email sent to {', '.join(recipients)}"
    except Exception as e:
        return f"Error sending booking status update email: {e}"

@shared_task
def send_custom_booking_email(booking_id, subject, message, from_email=None):
    try:
        booking = Booking.objects.get(id=booking_id)
    except Booking.DoesNotExist:
        return f"Booking with id {booking_id} does not exist."

    sender = (from_email and from_email.strip()) or getattr(settings, 'EMAIL_HOST_USER', None) or "info@autofya.com"

    # Recipients: Client email + any additional guest emails
    recipients = [booking.email]
    if isinstance(booking.guest_emails, list):
        for g_email in booking.guest_emails:
            if g_email and isinstance(g_email, str) and g_email.strip() and g_email not in recipients:
                recipients.append(g_email.strip())

    context = {
        "booking": booking,
        "subject": subject,
        "message": message,
    }
    html_content = render_to_string("custom_booking_email_template.html", context)
    text_content = strip_tags(html_content)

    try:
        msg = EmailMultiAlternatives(
            subject,
            text_content,
            sender,
            recipients
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        return f"Custom booking email sent to {', '.join(recipients)} from {sender}"
    except Exception as e:
        return f"Error sending custom booking email: {e}"


@shared_task
def send_marketing_batch_email(recipients, subject, message, button_text=None, button_url=None, from_email=None):
    sender = (from_email and from_email.strip()) or getattr(settings, 'EMAIL_HOST_USER', None) or "info@autofya.com"
    
    if isinstance(recipients, str):
        recipients = [r.strip() for r in recipients.split(',') if r.strip()]

    if not recipients:
        return "No valid recipients provided."

    context = {
        "subject": subject,
        "message": message,
        "button_text": button_text,
        "button_url": button_url or "https://autofya.com",
    }
    html_content = render_to_string("marketing_email_template.html", context)
    text_content = strip_tags(html_content)

    sent_count = 0
    errors = []

    for recipient in recipients:
        try:
            msg = EmailMultiAlternatives(
                subject,
                text_content,
                sender,
                [recipient]
            )
            msg.attach_alternative(html_content, "text/html")
            msg.send()
            sent_count += 1
        except Exception as e:
            errors.append(f"{recipient}: {str(e)}")

    return f"Batch marketing email sent from {sender} to {sent_count}/{len(recipients)} recipients. Errors: {errors}"


@shared_task
def send_contact_reply_email(submission_id, subject, message, from_email=None):
    from bookings.models import ContactSubmission
    try:
        submission = ContactSubmission.objects.get(id=submission_id)
    except ContactSubmission.DoesNotExist:
        return f"Contact submission with id {submission_id} does not exist."

    sender = (from_email and from_email.strip()) or getattr(settings, 'EMAIL_HOST_USER', None) or "support@autofya.com"
    recipients = [submission.email]

    context = {
        "submission": submission,
        "subject": subject,
        "message": message,
    }

    try:
        html_content = render_to_string("custom_booking_email_template.html", {
            "booking": submission,
            "subject": subject,
            "message": message,
        })
    except Exception:
        html_content = f"<h2>{subject}</h2><p>{message}</p>"

    text_content = f"Dear {submission.full_name},\n\n{message}\n\nBest regards,\nAutofya Support"

    try:
        msg = EmailMultiAlternatives(
            subject,
            text_content,
            sender,
            recipients
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        return f"Contact reply email sent to {submission.email} from {sender}"
    except Exception as e:
        return f"Error sending contact reply email: {e}"



