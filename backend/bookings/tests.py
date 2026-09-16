from django.test import TestCase
from django.core import mail
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status
from bookings.models import Booking

User = get_user_model()


class BookingStatusEmailTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin_user = User.objects.create_user(
            email="admin@autofya.com",
            password="AdminPassword123!",
            full_name="Admin User",
            is_staff=True,
            is_active=True
        )
        self.booking = Booking.objects.create(
            meeting_title="Autofya Consultation",
            date="2026-10-15",
            time_slot="10:00 AM - 10:30 AM",
            timezone="UTC+6",
            name="John Doe",
            email="john@example.com",
            guest_emails=["guest1@example.com", "guest2@example.com"],
            phone="+1234567890",
            company_name="Acme Corp",
            status="pending"
        )
        # Clear outbox from initial creation if any
        mail.outbox = []

    def test_status_change_triggers_email(self):
        # Change status from pending to confirmed
        self.booking.status = "confirmed"
        self.booking.save()

        self.assertEqual(len(mail.outbox), 1)
        sent_email = mail.outbox[0]

        self.assertIn("Confirmed", sent_email.subject)
        self.assertIn("john@example.com", sent_email.to)
        self.assertIn("guest1@example.com", sent_email.to)
        self.assertIn("guest2@example.com", sent_email.to)
        self.assertIn("Confirmed", sent_email.body)
        self.assertIn("John Doe", sent_email.body)

    def test_non_status_update_does_not_trigger_email(self):
        # Update admin notes without changing status
        self.booking.admin_notes = "Internal note added."
        self.booking.save()

        self.assertEqual(len(mail.outbox), 0)

    def test_admin_api_patch_triggers_status_email(self):
        self.client.force_authenticate(user=self.admin_user)
        response = self.client.patch(
            f"/bookings/admin/{self.booking.id}/",
            {"status": "completed", "admin_notes": "Call went great!"},
            format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data["success"])
        self.assertEqual(len(mail.outbox), 1)

        sent_email = mail.outbox[0]
        self.assertIn("Completed", sent_email.subject)
        self.assertIn("Call went great!", sent_email.body)

    def test_cancelled_status_email(self):
        self.booking.status = "cancelled"
        self.booking.save()

        self.assertEqual(len(mail.outbox), 1)
        sent_email = mail.outbox[0]
        self.assertIn("Cancelled", sent_email.subject)
        self.assertIn("Meeting Cancelled", sent_email.body)

    def test_send_custom_admin_email(self):
        self.client.force_authenticate(user=self.admin_user)
        response = self.client.post(
            f"/bookings/admin/{self.booking.id}/send-email/",
            {
                "subject": "Important update regarding your call",
                "message": "Please prepare your project requirements document before the meeting."
            },
            format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data["success"])
        self.assertEqual(len(mail.outbox), 1)

        sent_email = mail.outbox[0]
        self.assertEqual(sent_email.subject, "Important update regarding your call")
        self.assertIn("john@example.com", sent_email.to)
        self.assertIn("guest1@example.com", sent_email.to)
        self.assertIn("Please prepare your project requirements document", sent_email.body)

    def test_send_custom_admin_email_validation(self):
        self.client.force_authenticate(user=self.admin_user)
        response = self.client.post(
            f"/bookings/admin/{self.booking.id}/send-email/",
            {"subject": "", "message": ""},
            format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertFalse(response.data["success"])
        self.assertEqual(len(mail.outbox), 0)

