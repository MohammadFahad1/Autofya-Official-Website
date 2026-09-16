from django.db import models
from django.conf import settings


class PageViewLog(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='page_views'
    )
    session_id = models.CharField(max_length=255, db_index=True)
    ip_address = models.CharField(max_length=100, db_index=True)
    user_agent = models.TextField(blank=True, null=True)
    device_type = models.CharField(max_length=50, default='desktop')
    page_url = models.CharField(max_length=500, db_index=True)
    page_title = models.CharField(max_length=255, blank=True, null=True)
    section_name = models.CharField(max_length=255, blank=True, null=True)
    duration_seconds = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        user_info = self.user.email if self.user else f"IP: {self.ip_address}"
        return f"{user_info} visited {self.page_url} ({self.duration_seconds}s)"
