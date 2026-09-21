from django.contrib import admin
from .models import JobPosition, JobApplication


@admin.register(JobPosition)
class JobPositionAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'type', 'vacancies', 'is_active', 'created_at')
    list_filter = ('category', 'type', 'is_active')
    search_fields = ('title', 'category', 'description')


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'job', 'status', 'created_at')
    list_filter = ('status', 'job')
    search_fields = ('name', 'email', 'cover_note')
