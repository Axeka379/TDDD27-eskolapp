from django.shortcuts import render, redirect, get_object_or_404
from django.utils.safestring import mark_safe
from django.conf import settings
from django.http import JsonResponse, HttpResponseBadRequest
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
import json

from .serializers import ServerSerializer, UserSerializer
from .models import Message, Server, User, Membership, Invitation

from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class CreateUserView(CreateAPIView):

    model = get_user_model()
    authentication_classes = []
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        user = self.model.objects.all().get(username=serializer.data['username'])
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        """return Response(
            {
                'confirmation_url': reverse(
                    'activate-user', args=[token], request=request
                )
            },
            status=status.HTTP_201_CREATED, headers=headers
        )"""
        return JsonResponse({
            "success": True
        })

"""
class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        #permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer
"""


@api_view(['POST'])
def register_new_user(request): #register
    pass

@api_view(['POST'])
def create_new_server(request):
    MAX_CREATED_SERVERS = 3
    MAX_JOINED_SERVERS = 10

    try:
        server_name = request.data["server_name"]
    except KeyError:
        return HttpResponseBadRequest("Missing arguments.")

    if not server_name or not isinstance(server_name, str) or len(server_name) > 30:
        return HttpResponseBadRequest("Argument 'server_name' not accepted.")

    if len(request.user.get_owned_servers()) > MAX_CREATED_SERVERS:
        return HttpResponseBadRequest("Maximum owned servers exceeded.")

    if len(request.user.get_joined_servers()) > MAX_JOINED_SERVERS:
        return HttpResponseBadRequest("Maximum joined servers exceeded.")

    # + Check if user is teacher

    server = Server.objects.create(name=server_name, owner=request.user)
    server.users.add(request.user)

    return JsonResponse({
        "server": server.serialize()
    })

@api_view(['POST'])
def create_server_invite(request):
    try:
        server_id = request.data["server_id"]
    except KeyError:
        return HttpResponseBadRequest("Missing arguments.")

    if not isinstance(server_id, int):
        return HttpResponseBadRequest("Argument 'server_id' not accepted.")

    if not Server.objects.filter(pk=server_id).exists():
        return HttpResponseBadRequest("Server not found.")
    server = Server.objects.get(pk=server_id)

    if not request.user.in_server(server):
        return HttpResponseBadRequest("User not in server.")

    # Check if follow server invitation rules

    invitation_link = Invitation.objects.create(server=server,creator=request.user, is_private=False)


    return JsonResponse({"invite_url": invitation_link.key})

@api_view(['POST'])
def join_server(request):
    # GET /invite/XXXXX
    # Load InviteUrl model
    # Remove instance if single-use
    # Check if server still exists
    # Check if not already in server
    # Check for max number of users in server
    # Check if max number of servers joined exceeded
    # Add user to server
    # Announce join via channels
    # Return server.serialize()
    try:
        key = request.data["key"]
    except KeyError:
        return HttpResponseBadRequest("Missing arguments.")

    if not isinstance(key, str):
        return HttpResponseBadRequest("Argument 'key' not accepted.")

    if not Invitation.objects.filter(key=key).exists():
        return HttpResponseBadRequest("key not found.")

    invitation = Invitation.objects.get(key=key)
    server = invitation.server

    if request.user.in_server(server):
        return HttpResponseBadRequest("User already joined.")

    # Check invitation is_private and remove if accordingly

    server.users.add(request.user)
    invitation.delete()

    return JsonResponse({"server": server.serialize()})

@api_view(['POST'])
def leave_server(request):
    # Check if server_id exists and is an integer
    # Check if Server exists
    # Check if user is in server
    # Check if user is not owner
    # Remove user from server/memberships
    # Announce leave via channels
    # return JsonResponse({})
    ...

@api_view(['POST'])
def delete_server(request):
    # Check if server_id exists and is an integer
    # Check if Server exists
    # Check if user is in server
    # Check if user is owner
    # Require server name confirmation of sorts
    # Remove server + make sure all memberships are updated
    # Announce deletion via channels
    # return JsonResponse({})
    ...



@api_view(['POST'])
def fetch_user_info(request):
    servers = request.user.get_joined_servers()

    return JsonResponse({
        "user": request.user.serialize(),
        "servers": [server.serialize() for server in servers]
    })

@api_view(['POST'])
def fetch_server_users(request, format=None):
    try:
        server_id = request.data["server_id"]
    except KeyError:
        return HttpResponseBadRequest("Missing arguments.")

    if not isinstance(server_id, int):
        return HttpResponseBadRequest("Argument 'server_id' not accepted.")

    if not Server.objects.filter(pk=server_id).exists():
        return HttpResponseBadRequest("Server not found.")
    server = Server.objects.get(pk=server_id)

    if not request.user.in_server(server):
        return HttpResponseBadRequest("User not in server.")

    users = server.users.all()

    return JsonResponse({
        "users": [user.serialize() for user in users]
    })

@api_view(['POST'])
def fetch_server_messages(request):
    MESSAGE_HISTORY = 10
    try:
        server_id = request.data["server_id"]
    except KeyError:
        return HttpResponseBadRequest("Missing arguments.")

    if not isinstance(server_id, int):
        return HttpResponseBadRequest("Argument 'server_id' not accepted.")

    if not Server.objects.filter(pk=server_id).exists():
        return HttpResponseBadRequest("Server not found.")
    server = Server.objects.get(pk=server_id)

    if not request.user.in_server(server):
        return HttpResponseBadRequest("User not in server.")

    messages = server.messages.all().order_by('-id')[:MESSAGE_HISTORY]
    messages = reversed(messages)
    # Optional message id to reach further in history

    return JsonResponse({
        "messages": [message.serialize() for message in messages]
    })
