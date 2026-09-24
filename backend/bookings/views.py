from rest_framework import status
from rest_framework.response import Response
from autofya.base import NewAPIView
from rest_framework.permissions import AllowAny
from authentication.permissions import IsAdminUser
from django.db.models import Q
from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from bookings.models import Booking, ContactSubmission
from bookings.serializers import (
    BookingCreateSerializer, BookingAdminSerializer,
    ContactSubmissionCreateSerializer, ContactSubmissionAdminSerializer
)
from bookings.tasks import (
    send_booking_confirmation_email, send_custom_booking_email,
    send_marketing_batch_email, send_contact_reply_email
)


class AdminSendBatchEmailView(NewAPIView):
    permission_classes = [IsAdminUser]
    http_method_names = ['post']

    @swagger_auto_schema(tags=['Admin Panel - Marketing Emails'])
    def post(self, request):
        """
        **Send Batch Marketing Email on Autofya Pad**\n
        Sends custom branded HTML emails to a list/batch of recipient email addresses.
        """
        recipients = request.data.get('recipients', [])
        subject = request.data.get('subject', '').strip()
        message = request.data.get('message', '').strip()
        button_text = request.data.get('button_text', '').strip()
        button_url = request.data.get('button_url', '').strip()
        from_email = request.data.get('from_email', '').strip()

        # Handle recipients passed as string (comma or newline separated) or array
        if isinstance(recipients, str):
            recipients = [r.strip() for r in recipients.replace('\n', ',').split(',') if r.strip()]

        if not isinstance(recipients, list) or not recipients:
            return Response({
                'success': False,
                'message': 'At least one recipient email address is required.'
            }, status=status.HTTP_400_BAD_REQUEST)

        if not subject or not message:
            return Response({
                'success': False,
                'message': 'Both subject and message content are required.'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            send_marketing_batch_email.delay(recipients, subject, message, button_text, button_url, from_email)
            return Response({
                'success': True,
                'message': f'Marketing email queued successfully for {len(recipients)} recipient(s).',
                'recipient_count': len(recipients)
            }, status=status.HTTP_200_OK)
        except Exception as e:
            try:
                result = send_marketing_batch_email(recipients, subject, message, button_text, button_url, from_email)
                return Response({
                    'success': True,
                    'message': f'Emails sent directly. Result: {result}',
                    'recipient_count': len(recipients)
                }, status=status.HTTP_200_OK)
            except Exception as sync_err:
                return Response({
                    'success': False,
                    'message': f'Failed to send batch emails: {sync_err}'
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CreateBookingView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = BookingCreateSerializer
    http_method_names = ['post']

    @swagger_auto_schema(tags=['Bookings'])
    def post(self, request):
        """
        **Submit a Schedule Booking Request**\n
        Public endpoint for scheduling a meeting call.
        """
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            booking = serializer.save()
            try:
                send_booking_confirmation_email.delay(booking.id)
            except Exception as e:
                print(f"Error triggering email task: {e}")

            return Response({
                'success': True,
                'message': 'Booking scheduled successfully.',
                'booking': BookingCreateSerializer(booking).data
            }, status=status.HTTP_201_CREATED)

        return Response({
            'success': False,
            'message': f'Invalid data: {serializer.errors}'
        }, status=status.HTTP_400_BAD_REQUEST)


class AdminBookingListView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = BookingAdminSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Admin Panel - Bookings'])
    def get(self, request):
        """
        **Get List of Schedule Bookings**\n
        Supports searching by name, email, or company, and filtering by status.
        """
        search_query = request.query_params.get('search', '').strip()
        status_filter = request.query_params.get('status', '').strip()

        bookings = Booking.objects.all()

        if search_query:
            bookings = bookings.filter(
                Q(name__icontains=search_query) |
                Q(email__icontains=search_query) |
                Q(company_name__icontains=search_query)
            )

        if status_filter in ['pending', 'confirmed', 'completed', 'cancelled']:
            bookings = bookings.filter(status=status_filter)

        serializer = self.serializer_class(bookings, many=True)
        return Response({
            'success': True,
            'count': bookings.count(),
            'bookings': serializer.data
        }, status=status.HTTP_200_OK)


class AdminBookingDetailView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = BookingAdminSerializer
    http_method_names = ['get', 'patch', 'delete']

    @swagger_auto_schema(tags=['Admin Panel - Bookings'])
    def get(self, request, pk):
        booking = get_object_or_404(Booking, pk=pk)
        serializer = self.serializer_class(booking)
        return Response({'success': True, 'booking': serializer.data}, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['Admin Panel - Bookings'])
    def patch(self, request, pk):
        booking = get_object_or_404(Booking, pk=pk)
        serializer = self.serializer_class(booking, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'success': True,
                'message': 'Booking updated successfully.',
                'booking': serializer.data
            }, status=status.HTTP_200_OK)
        return Response({
            'success': False,
            'message': f'Validation error: {serializer.errors}'
        }, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(tags=['Admin Panel - Bookings'])
    def delete(self, request, pk):
        booking = get_object_or_404(Booking, pk=pk)
        booking.delete()
        return Response({
            'success': True,
            'message': 'Booking deleted successfully.'
        }, status=status.HTTP_200_OK)


class AdminBookingStatsView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = BookingAdminSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Admin Panel - Bookings'])
    def get(self, request):
        total = Booking.objects.count()
        pending = Booking.objects.filter(status='pending').count()
        confirmed = Booking.objects.filter(status='confirmed').count()
        completed = Booking.objects.filter(status='completed').count()
        cancelled = Booking.objects.filter(status='cancelled').count()

        return Response({
            'success': True,
            'stats': {
                'total_bookings': total,
                'pending_bookings': pending,
                'confirmed_bookings': confirmed,
                'completed_bookings': completed,
                'cancelled_bookings': cancelled,
            }
        }, status=status.HTTP_200_OK)


class AdminSendBookingEmailView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = BookingAdminSerializer
    http_method_names = ['post']

    @swagger_auto_schema(tags=['Admin Panel - Bookings'])
    def post(self, request, pk):
        """
        **Send Custom Email to User**\n
        Sends a direct email message from admin to the user who booked the schedule.
        """
        booking = get_object_or_404(Booking, pk=pk)
        subject = request.data.get('subject', '').strip()
        message = request.data.get('message', '').strip()
        from_email = request.data.get('from_email', '').strip()

        if not subject or not message:
            return Response({
                'success': False,
                'message': 'Both subject and message are required.'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            send_custom_booking_email.delay(booking.id, subject, message, from_email)
            return Response({
                'success': True,
                'message': f'Email scheduled successfully for {booking.email}.'
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'success': False,
                'message': f'Failed to trigger email task: {e}'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CreateContactSubmissionView(NewAPIView):
    permission_classes = [AllowAny]
    serializer_class = ContactSubmissionCreateSerializer
    http_method_names = ['post']

    @swagger_auto_schema(tags=['Contact'])
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            submission = serializer.save()
            return Response({
                'success': True,
                'message': 'Contact message submitted successfully.',
                'submission': serializer.data
            }, status=status.HTTP_201_CREATED)

        return Response({
            'success': False,
            'message': f'Invalid data: {serializer.errors}'
        }, status=status.HTTP_400_BAD_REQUEST)


class AdminContactListView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = ContactSubmissionAdminSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Admin Panel - Contacts'])
    def get(self, request):
        search_query = request.query_params.get('search', '').strip()
        status_filter = request.query_params.get('status', '').strip()

        contacts = ContactSubmission.objects.all()

        if search_query:
            contacts = contacts.filter(
                Q(full_name__icontains=search_query) |
                Q(email__icontains=search_query) |
                Q(company_name__icontains=search_query) |
                Q(project_details__icontains=search_query)
            )

        if status_filter in ['new', 'replied', 'archived']:
            contacts = contacts.filter(status=status_filter)

        serializer = self.serializer_class(contacts, many=True)
        return Response({
            'success': True,
            'count': contacts.count(),
            'contacts': serializer.data
        }, status=status.HTTP_200_OK)


class AdminContactDetailView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = ContactSubmissionAdminSerializer
    http_method_names = ['get', 'patch', 'delete']

    @swagger_auto_schema(tags=['Admin Panel - Contacts'])
    def get(self, request, pk):
        contact = get_object_or_404(ContactSubmission, pk=pk)
        serializer = self.serializer_class(contact)
        return Response({'success': True, 'contact': serializer.data}, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['Admin Panel - Contacts'])
    def patch(self, request, pk):
        contact = get_object_or_404(ContactSubmission, pk=pk)
        serializer = self.serializer_class(contact, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'success': True,
                'message': 'Contact submission updated successfully.',
                'contact': serializer.data
            }, status=status.HTTP_200_OK)
        return Response({
            'success': False,
            'message': f'Validation error: {serializer.errors}'
        }, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(tags=['Admin Panel - Contacts'])
    def delete(self, request, pk):
        contact = get_object_or_404(ContactSubmission, pk=pk)
        contact.delete()
        return Response({
            'success': True,
            'message': 'Contact submission deleted successfully.'
        }, status=status.HTTP_200_OK)


class AdminContactStatsView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = ContactSubmissionAdminSerializer
    http_method_names = ['get']

    @swagger_auto_schema(tags=['Admin Panel - Contacts'])
    def get(self, request):
        total = ContactSubmission.objects.count()
        new_count = ContactSubmission.objects.filter(status='new').count()
        replied_count = ContactSubmission.objects.filter(status='replied').count()
        archived_count = ContactSubmission.objects.filter(status='archived').count()

        return Response({
            'success': True,
            'stats': {
                'total_contacts': total,
                'new_contacts': new_count,
                'replied_contacts': replied_count,
                'archived_contacts': archived_count,
            }
        }, status=status.HTTP_200_OK)


class AdminSendContactReplyView(NewAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = ContactSubmissionAdminSerializer
    http_method_names = ['post']

    @swagger_auto_schema(tags=['Admin Panel - Contacts'])
    def post(self, request, pk):
        contact = get_object_or_404(ContactSubmission, pk=pk)
        subject = request.data.get('subject', '').strip()
        message = request.data.get('message', '').strip()
        from_email = request.data.get('from_email', '').strip() or 'support@autofya.com'

        if not subject or not message:
            return Response({
                'success': False,
                'message': 'Both subject and message are required.'
            }, status=status.HTTP_400_BAD_REQUEST)

        from django.utils import timezone
        contact.status = 'replied'
        contact.admin_reply = message
        contact.replied_at = timezone.now()
        contact.save()

        try:
            send_contact_reply_email.delay(contact.id, subject, message, from_email)
            return Response({
                'success': True,
                'message': f'Reply email queued successfully for {contact.email}.',
                'contact': self.serializer_class(contact).data
            }, status=status.HTTP_200_OK)
        except Exception as e:
            try:
                res = send_contact_reply_email(contact.id, subject, message, from_email)
                return Response({
                    'success': True,
                    'message': f'Reply email sent. Result: {res}',
                    'contact': self.serializer_class(contact).data
                }, status=status.HTTP_200_OK)
            except Exception as sync_err:
                return Response({
                    'success': False,
                    'message': f'Failed to send reply email: {sync_err}'
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

