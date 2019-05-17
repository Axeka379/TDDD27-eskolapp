from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings
from django.utils import timezone


class BlogPost(models.Model):
    """
    The "BlogPost" model for the micro blog app
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(
        default=timezone.now
    )
    body = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.body
