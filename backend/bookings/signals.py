from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from bookings.models import Booking
from bookings.tasks import send_booking_status_update_email

@receiver(pre_save, sender=Booking)
def track_booking_status_change(sender, instance, **kwargs):
    if instance.pk:
        try:
            old_instance = Booking.objects.get(pk=instance.pk)
            if old_instance.status != instance.status:
                instance._status_changed_info = (old_instance.status, instance.status)
        except Booking.DoesNotExist:
            pass

@receiver(post_save, sender=Booking)
def trigger_booking_status_update_email(sender, instance, created, **kwargs):
    if not created and hasattr(instance, '_status_changed_info'):
        old_status, new_status = instance._status_changed_info
        delattr(instance, '_status_changed_info')
        try:
            send_booking_status_update_email.delay(instance.id, old_status, new_status)
        except Exception as e:
            print(f"Error triggering booking status update email task: {e}")
