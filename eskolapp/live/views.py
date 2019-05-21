from django.shortcuts import render, redirect, get_object_or_404
from django.utils.safestring import mark_safe
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.http import JsonResponse
from django.contrib.auth import get_user_model
#from rest_framework import viewsets, permissions
#from rest_framework import serializers

from rest_framework.decorators import api_view, permission_classes
from .models import Message, Server, User
import json

def chat_home(request):
    return render(request, 'live/chat_home.html', {})

def chat_room(request, room_name):
    return render(request, 'live/chat_room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

@api_view(['POST'])
def create_new_server(request):
    if request.method == 'POST':
        server_name = request.data.get('server_name', None)
        if server_name:
            server = Server.objects.create(name=server_name, owner=request.user)
            return JsonResponse({"status":"created server"})
    return JsonResponse({"status": "failed to create server"})

@api_view(['POST'])
def fetch_user_servers(request):
    servers = Server.objects.filter(users=request.user)
    return JsonResponse({"servers":[server.name for server in servers]})

@api_view(['POST'])
def fetch_server_users(request, format=None):
    if request.method == 'POST':
        server_id = request.data.get("server_id", -1)
        users = User.objects.filter(server__id=server_id)
        return JsonResponse({"users": [user.username for user in users]})
    return JsonResponse({"status":"failed to fetch server users"})

@api_view(['POST'])
def fetch_server_messages(request):
    if request.method == 'POST':
        server_id = request.data.get("server_id", -1)
        messages = Message.objects.filter(server__id=server_id)
        return JsonResponse({"users": [user.name for user in users]})