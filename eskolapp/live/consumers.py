from channels.generic.websocket import AsyncJsonWebsocketConsumer
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from .models import Server, Message
import json, time

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

        await self.accept("JWT")
        #await self.on_join(1) # server_id
        #await self.on_join(2)

    # On connection closing
    async def disconnect(self, close_code):
        # TODO: Remove user from all server groups they're in
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        #await self.on_leave(1) # server_id
        #await self.on_leave(2)

    # Send data to a group given a message type and data for that type
    async def group_send(self, event):
        await self.send_json({
            'type': event['msg_type'],
            'data': event['data']
        })


    ### Receiving data

    # Receive message from WebSocket: {type: string, ...}
    async def receive_json(self, json_data):
        method = json_data.get('type', None)

        if method == 'message':
            await self.on_send_message(json_data)
        #elif method == 'other_commands':
        #    ...
        else:
            print("Error in receive_json:", json_data)


    # Receive message from room group
    async def on_send_message(self, data):
        try:
            server_id = data['server_id']
            content = data['content']
        except KeyError:
            return print('Error in on_send_message: Malformed data:', data)

        if not isinstance(server_id, int) or not isinstance(content, str):
            return print('Error in on_send_message: Malformed data:', data)

        if not Server.objects.filter(pk=server_id).exists():
            return print('Error in on_send_message: Server id not found:', server_id)
        server = Server.objects.get(pk=server_id)

        if not (1 <= len(content) <= 2000):
            return print('Error in on_send_message: Message too long or short')

        message = Message.objects.create(
            server = server,
            user = self.user,
            content = content,
        )

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'group_send',
                'msg_type': 'message',
                'data': message.serialize()
            }
        )


    # Separate: on_join_server, on_leave_server, on_online_status

    """
    async def on_join(self, server_id):
        msg_id = 1
        time_now = time.time() * 1000

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'group_send',
                'msg_type': 'join',
                'data': {
                    'server_id': server_id,
                    'user_id': self.user.id,
                    'msg_id': msg_id,
                    'timestamp': time_now,
                }
            }
        )

    async def on_leave(self, server_id):
        # TODO: Add message to database and use values below
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


    async def on_presence(self):
        pass

    async def send_presence(self, event):
        pass


    async def on_fetch_server_users(self, server):
        await self.channel_layer.group_send(
        self.room_group_name,
            {
                'type': 'fetch_server_users',
                'user_id' : [user.id for user in server.get_user()]
            }
        )
        pass

    async def fetch_server_users(self, event):
        await self.send_json({
            'type: server_user_list'
            'user_id' : event['user_id']
        })
    """