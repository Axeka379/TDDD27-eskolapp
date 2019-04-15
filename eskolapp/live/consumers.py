from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from datetime import datetime
import json


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        self.user = self.scope['user']
        # Join room group
        try:
            await self.channel_layer.group_add(
                self.room_group_name,
                self.channel_name
            )
        except OSError:
            print('\033[91m')
            print('Måns says: Did you forgot to start the Redis server?')
            print('sudo docker run -p 6379:6379 -d redis:2.8')
            print('\033[0m')

        await self.accept()
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message' : '"connected to the server"',
                'sender' : self.user.username
            }

        ) # TODO: Display the message time!



    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message' : '"disconnected from the server"',
                'sender' : self.user.username
            }
        )
    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        username_str = None
        username = self.scope['user']
        message = text_data_json['message']
        sender = username.username #TODO: This can be changed to id later...
        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'sender' : sender
            }
        )

    # Receive message from room group
    async def chat_message(self, event):

        date = datetime.today().strftime('%Y-%m-%d') + ": " 

        message = event['message']
        sender = date + event['sender']
        package = {
            'message' : message,
            'sender' : sender
        }
        # Send message to WebSocket
        await self.send(text_data=json.dumps(package))
