from django.shortcuts import render,redirect,get_object_or_404
from django.utils.safestring import mark_safe
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.http import JsonResponse
from django.contrib.auth import get_user_model

from .models import Message, Server, User
import json


def chat_home(request):
    return render(request, 'live/chat_home.html', {})


def chat_room(request, room_name):
    return render(request, 'live/chat_room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

def new_server(request):
    #user = get_object_or_404(request.user)
    print("New server: ")
    servername = get_object_or_404(Server)
    print(servername)
    #server.users.add(user.username)
    return JsonResponse({"hej":123})

def getUser(request):
    serverusers = Server.objects.all()
    print(serverusers)
    users = get_object_or_404()

    return JsonResponse({"user": users})

def fetch_user_servers(request):
    servers = Server.objects.filter(users=request.user)
    return JsonResponse({"servers":[server.name for server in servers]})

def fetch_server_users(request):
    if request.method == 'POST':
        server_id = request.POST.get("server_id", -1)
        users = User.objects.filter(server__id=server_id)
        return JsonResponse({"users": [user.name for user in users]})
    return JsonResponse({})

def fetch_server_messages(request):
    if request.method == 'POST':
        server_id = request.POST.get("server_id", -1)
        messages = Message.objects.filter(server__id=server_id)
        return JsonResponse({"users": [user.name for user in users]})
