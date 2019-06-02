from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Server


from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('username', 'password', 'email')

    def create(self, validated_data):
        print('-'*20, 'YES')
        user = get_user_model()(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.is_active = True
        user.save()
        return user


class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = ('name', 'owner', 'users')
