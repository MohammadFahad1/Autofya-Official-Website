from django.db import models


class JobPosition(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    type = models.CharField(max_length=100, default='Full-time')
    date_posted = models.CharField(max_length=100, blank=True, null=True)
    application_deadline = models.DateField(blank=True, null=True)
    vacancies = models.PositiveIntegerField(default=1)
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class JobApplication(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
    )

    job = models.ForeignKey(JobPosition, on_delete=models.CASCADE, related_name='applications')
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    education = models.CharField(max_length=255, blank=True, null=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    portfolio = models.URLField(max_length=500, blank=True, null=True)
    cover_note = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.job.title}"

    def delete(self, *args, **kwargs):
        if self.resume:
            self.resume.delete(save=False)
        super().delete(*args, **kwargs)

