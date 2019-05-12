from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib import admin
from django.contrib.auth import get_user_model


# Create your models here.

class Server(models.Model):
    name = models.CharField(max_length=30)
    owner = models.ForeignKey('User', related_name='servers', on_delete=models.CASCADE)
    users = models.ManyToManyField('User', through="Membership")

    def __str__(self):
        return self.name

class User(AbstractUser):
    pass

class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="memberships")
    server = models.ForeignKey(Server, on_delete=models.CASCADE)
    date_joined = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "server")

class MembershipInline(admin.TabularInline):
    model = Membership
    extra = 1

class UserAdmin(admin.ModelAdmin):
    inlines = (MembershipInline, )

class ServerAdmin(admin.ModelAdmin):
    inlines = (MembershipInline, )

class Message(models.Model):
    server = models.ForeignKey(Server, related_name='messages', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    content = models.TextField(max_length=2000)
    content_html = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.content
