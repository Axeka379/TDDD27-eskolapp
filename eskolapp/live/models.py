from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib.auth import get_user_model

##Reminder (mostly for Axel): Settings.AUTH_USER_MODEL is used to reference djangos user since User is overwritten.

# Create your models here.

class Server(models.Model):
    name = models.TextField()
    users = models.ManyToManyField('User', blank=True)

class User(AbstractUser):
    servers = models.ManyToManyField(Server, blank=True)

class Message(models.Model):
    server = models.ForeignKey(Server, related_name='messages', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    content = models.TextField(max_length=2000)
    content_html = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.content
