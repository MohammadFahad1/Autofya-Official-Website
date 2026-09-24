from django.db import models

class Booking(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    meeting_title = models.CharField(max_length=255, default="Autofya Meeting — 30 Minute Meeting")
    date = models.CharField(max_length=100)
    time_slot = models.CharField(max_length=100)
    timezone = models.CharField(max_length=100)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    guest_emails = models.JSONField(default=list, blank=True)
    phone = models.CharField(max_length=50)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    role = models.CharField(max_length=255, blank=True, null=True)
    situation = models.CharField(max_length=255, blank=True, null=True)
    investment_range = models.CharField(max_length=100, blank=True, null=True)
    engagement_type = models.CharField(max_length=100, blank=True, null=True)
    outcomes = models.JSONField(default=list, blank=True)
    hear_about_us = models.CharField(max_length=100, blank=True, null=True)
    must_work_notes = models.TextField(blank=True, null=True)
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    admin_notes = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} ({self.email}) - {self.date} {self.time_slot}"


class ContactSubmission(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('replied', 'Replied'),
        ('archived', 'Archived'),
    ]

    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True, null=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    industry = models.CharField(max_length=100, blank=True, null=True)
    service = models.CharField(max_length=100, blank=True, null=True)
    budget = models.CharField(max_length=100, blank=True, null=True)
    project_details = models.TextField()
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    admin_reply = models.TextField(blank=True, null=True)
    replied_at = models.DateTimeField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Contact Submission from {self.full_name} ({self.email})"

