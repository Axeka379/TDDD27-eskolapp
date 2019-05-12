from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib.auth import get_user_model


# Create your models here.

class Server(models.Model):
    name = models.CharField(max_length=30)
    owner = models.ForeignKey('User', related_name='servers', on_delete=models.CASCADE)
    users = models.ManyToManyField('User', default=[])

    def __str__(self):
        return self.name


class User(AbstractUser):
    pass
    #servers = models.ManyToManyField('Server', blank=True, null=True, default=[])

class Message(models.Model):
    server = models.ForeignKey(Server, related_name='messages', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    content = models.TextField(max_length=2000)
    content_html = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.content
