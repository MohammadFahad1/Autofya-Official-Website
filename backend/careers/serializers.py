from rest_framework import serializers
from .models import JobPosition, JobApplication


class JobPositionSerializer(serializers.ModelSerializer):
    datePosted = serializers.SerializerMethodField()
    applicationDeadline = serializers.SerializerMethodField()
    applications_count = serializers.SerializerMethodField()

    class Meta:
        model = JobPosition
        fields = [
            'id',
            'title',
            'category',
            'type',
            'date_posted',
            'datePosted',
            'application_deadline',
            'applicationDeadline',
            'vacancies',
            'description',
            'is_active',
            'applications_count',
            'created_at',
            'updated_at',
        ]

    def get_datePosted(self, obj):
        if obj.date_posted:
            return obj.date_posted
        return obj.created_at.strftime("%d %b, %Y")

    def get_applicationDeadline(self, obj):
        if obj.application_deadline:
            return obj.application_deadline.strftime("%d %b, %Y")
        return None

    def get_applications_count(self, obj):
        return obj.applications.count()


class JobApplicationSerializer(serializers.ModelSerializer):
    job_title = serializers.ReadOnlyField(source='job.title')
    resume_url = serializers.SerializerMethodField()

    class Meta:
        model = JobApplication
        fields = [
            'id',
            'job',
            'job_title',
            'name',
            'email',
            'phone_number',
            'date_of_birth',
            'education',
            'resume',
            'resume_url',
            'portfolio',
            'cover_note',
            'status',
            'created_at',
        ]

    def get_resume_url(self, obj):
        request = self.context.get('request')
        if obj.resume:
            if request:
                return request.build_absolute_uri(obj.resume.url)
            return obj.resume.url
        return None
