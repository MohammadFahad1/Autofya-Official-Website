from django.contrib import admin
from analytics.models import PageViewLog


@admin.register(PageViewLog)
class PageViewLogAdmin(admin.ModelAdmin):
    list_display = ('ip_address', 'user', 'page_url', 'section_name', 'duration_seconds', 'device_type', 'created_at')
    list_filter = ('device_type', 'created_at')
    search_fields = ('ip_address', 'user__email', 'page_url', 'section_name', 'user_agent')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
