from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import viewsets, permissions, status
from .models import BlogPost
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
#from rest_framework.permissions import AllowAny
from .permissions import ReadOnly

def index(request, path=''):
    """
    The home page. This renders the container for the single-page app.
    """
    return render(request, 'index.html')


class UserViewSet(APIView):
    """
    Provides basic CRUD functions for the User model
    queryset = get_user_model().objects.all()
    serializer_class = serializers.UserSerializer
    """
    authentication_classes = []
    permission_classes = [ReadOnly, ]

    def get(self, request, format=None):
        users = get_user_model().objects.all()
        serializer = UserSerializer(users)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""
    def create(self, request):

        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass

class BlogPostViewSet(viewsets.ModelViewSet):
    Provides basic CRUD functions for the Blog Post model
    queryset = BlogPost.objects.all()
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


"""
