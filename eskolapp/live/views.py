from django.shortcuts import render
from django.utils.safestring import mark_safe
from django.contrib.auth.decorators import login_required
from django.conf import settings

from .models import Message, Server
import json


def chat_home(request):
    return render(request, 'live/chat_home.html', {})


def chat_room(request, room_name):
    print("HÄR")

    return render(request, 'live/chat_room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

def new_server(request):
    print("works")
    #if(request.method == 'POST'):
    server = Server.objects.create(name="testing")
    server.users.set("yo")
    #    return render(request, 'live/chat_home.html')

    return render(request, 'live/chat_home.html')
