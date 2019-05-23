from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib import admin
from django.contrib.auth import get_user_model


# Create your models here.

class Server(models.Model):
    name = models.CharField(max_length=30)
    owner = models.ForeignKey('User', related_name='owned_servers', on_delete=models.CASCADE)
    users = models.ManyToManyField('User', through="Membership")
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'owner': self.owner.id,
            'created': self.created.timestamp() * 1000,
        }

class User(AbstractUser):
    ...

    def get_owned_servers(self):
        return self.owned_servers.all()

    def get_joined_servers(self):
        return [membership.server for membership in self.joined_servers.all()]

    def in_server(self, server):
        return self.joined_servers.filter(server__id=server.id).exists()

    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name': self.first_name,
            'last_name': self.last_name,
        }

class Message(models.Model):
    server = models.ForeignKey(Server, related_name='messages', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    content = models.TextField(max_length=2000)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.content

    def serialize(self):
        return {
            'id': self.id,
            'server': self.server.id,
            'user': self.user.id,
            'content': self.content,
            'created': self.created.timestamp() * 1000,
            'updated': self.updated.timestamp() * 1000,
        }

class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="joined_servers")
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