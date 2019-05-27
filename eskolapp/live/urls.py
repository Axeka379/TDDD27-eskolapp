from django.urls import path, include
from django.conf.urls import url

from . import views


urlpatterns = [
	url(r'^register/$', views.CreateUserView.as_view(), name='register'),

	url(r'^create_new_server/$', views.create_new_server, name='create_new_server'),
	url(r'^create_server_invite/$', views.create_server_invite, name='create_server_invite'),

	url(r'^join_server/$', views.join_server, name='join_server'),

	url(r'^fetch_user_info/$', views.fetch_user_info, name='fetch_user_info'),
	url(r'^fetch_server_users/$', views.fetch_server_users, name='fetch_server_users'),
	url(r'^fetch_server_messages/$', views.fetch_server_messages, name='fetch_server_messages'),
]