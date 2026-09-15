from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from authentication.models import User

admin.site.site_header = "Autofya Admin Portal"
admin.site.site_title = "Autofya Admin Portal"
admin.site.index_title = "Welcome to Autofya Admin Portal"

class CustomerUserAdmin(UserAdmin):
    model = User
    list_display = ('email', 'is_staff', 'is_active', 'created_at', 'updated_at')
    list_filter = ('is_staff', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'is_active')}),
        ('Important Dates', {'fields': ('last_login',)}),
        ('OTP', {'fields': ('otp', 'otp_created_at', 'forgot_password_token')}),
        ('System Info', {'fields': ('created_at', 'updated_at')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    search_fields = ('email',)
    ordering = ('-created_at',)
    
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(User, CustomerUserAdmin)

