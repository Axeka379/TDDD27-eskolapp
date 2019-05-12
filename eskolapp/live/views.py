from django.shortcuts import render,redirect,get_object_or_404
from django.utils.safestring import mark_safe
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.http import JsonResponse
from django.contrib.auth import get_user_model

from .models import Message, Server
import json


def chat_home(request):
    return render(request, 'live/chat_home.html', {})


def chat_room(request, room_name):
    return render(request, 'live/chat_room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

def new_server(request):
    #user = get_object_or_404(request.user)
    print(request.user.id)
    #server.users.add(user.username)
    return JsonResponse({"C":123})

def getUser(request):
    print("check")
    users = get_object_or_404(self.Server.get_users(),)
    print(users)
    return JsonResponse({"user": users})

def fetch_user_servers(request):
    pass

"""
    server = Server.objects.create(name="testing")
    server.users.set("yo")
    #    return render(request, 'live/chat_home.html')

    return render(request, 'live/chat_home.html')
"""
