from django.shortcuts import render
from django.utils.safestring import mark_safe
import json


def chat_home(request):
    return render(request, 'live/chat_home.html', {})

def chat_room(request, room_name):
    return render(request, 'live/chat_room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })
