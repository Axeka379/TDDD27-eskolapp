from django.shortcuts import render
from django.utils.safestring import mark_safe
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model


import json



def chat_home(request):
    return render(request, 'live/chat_home.html', {})

@login_required
def chat_room(request, room_name):
    return render(request, 'live/chat_room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })
