from django.contrib import admin
from .models import Server, ServerAdmin, User, UserAdmin, Membership

admin.site.register(Server, ServerAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Membership)
