from channels.generic.websocket import AsyncJsonWebsocketConsumer
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
import json, time

# TODO:
#   * Setup json protocol to send to frontend. (get_user?????)
#   * Send user information that is useful.

class ChatConsumer(AsyncJsonWebsocketConsumer):
    # On new socket connection
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        self.user = self.scope['user']

        # Join room group
        try:
            # TODO: Add user to all server groups they're in
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

    # On connection closing
    async def disconnect(self, close_code):
        # TODO: Remove user from all server groups they're in
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        await self.on_leave()

    # Receive message from WebSocket: {type: string, ...}
    async def receive_json(self, json_data):
        method = json_data.get('type', None)

        if method == 'message':
            await self.on_send_message(json_data)
        #elif method == 'other_commands':
        #    ...
        else:
            print("Error in receive_json:", json_data)


    async def on_join(self):
        # TODO: Add message to database and use values below
        server_id = 1
        msg_id = 1
        time_now = time.time() * 1000

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_join',
                'server_id': server_id,
                'user_id': self.user.id,
                'msg_id': msg_id,
                'timestamp': time_now,
            }
        )
        await self.on_presence()

    async def send_join(self, event):
        await self.send_json({
            'type': 'join',
            'server_id': event['server_id'],
            'user_id': event['user_id'],
            'msg_id': event['msg_id'],
            'timestamp': event['timestamp'],
        })


    # 
    async def on_leave(self):
        # TODO: Add message to database and use values below
        server_id = 1
        msg_id = 1
        time_now = time.time() * 1000

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_leave',
                'server_id': server_id,
                'user_id': self.user.id,
                'msg_id': msg_id,
                'timestamp': time_now,
            }
        )
        await self.on_presence()

    async def send_leave(self, event):
        await self.send_json({
            'type': 'leave',
            'server_id': event['server_id'],
            'user_id': event['user_id'],
            'msg_id': event['msg_id'],
            'timestamp': event['timestamp'],
        })


    # Receive message from room group
    async def on_send_message(self, json_data):
        # TODO: Add message to database and use values below
        content = json_data['content']
        server_id = 1
        msg_id = 1
        time_now = time.time() * 1000

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'server_id': server_id,
                'user_id': self.user.id,
                'msg_id': msg_id,
                'timestamp': time_now,
                'content': content,
            }
        )

    async def send_message(self, event):
        await self.send_json({
            'type': 'message',
            'server_id': event['server_id'],
            'user_id': event['user_id'],
            'msg_id': event['msg_id'],
            'timestamp': event['timestamp'],
            'content': event['content'],
        })


    async def on_presence(self):
        pass
        """
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_presence',
                'user_id': self.user.id,
                'server': self.room_name
            }
        )
        """