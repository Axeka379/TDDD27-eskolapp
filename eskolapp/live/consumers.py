from channels.generic.websocket import AsyncJsonWebsocketConsumer
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
import json, time

# TODO:
#   * Setup json protocol to send to frontend. (get_user?????)
#   * Send user information that is useful.

class ChatConsumer(AsyncJsonWebsocketConsumer):
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
        await self.on_join()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        await self.on_leave()

    # Receive message from WebSocket
    async def receive_json(self, json_data):
        method = json_data.get('type', None)
        if method == 'message':
            content = json_data['content']
            await self.on_send_message(content)
        else:
            print("Error in receive_json:", json_data)

    async def on_join(self):
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_join',
                'user_id' : self.user.id
            }
        )
        await self.on_presence()


    # Receive message from room group
    async def on_send_message(self, content):
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'user_id' : self.user.id,
                'content' : content,
                'msg_id' : 1,
                'timestamp' : time.time()
            }
        )

    async def on_leave(self):
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_leave',
                'user_id' : self.user.id
            }
        )
        await self.on_presence()

    async def on_presence(self):
        pass
        """
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_presence',
                'user_id' : self.user.id,
                'server' : self.room_name
            }
        )
        """

    async def send_join(self, event):
        await self.send_json({
            'type' : 'join',
            'user_id'   : event['user_id']
        })

    async def send_message(self, event):
        await self.send_json({
            'type' : 'message',
            'user_id'   : event['user_id'],
            'msg_id' : event['msg_id'],
            'content' : event['content'],
            'timestamp' : event['timestamp']
        })

    async def send_leave(self, event):
        await self.send_json({
            'type' : 'leave',
            'user_id'   : event['user_id']
        })
