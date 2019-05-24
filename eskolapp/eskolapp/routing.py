from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from live.jwt_token_auth import JwtTokenAuthMiddleware
import live.routing

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': JwtTokenAuthMiddleware(
        URLRouter(
            live.routing.websocket_urlpatterns
        )
    ),
})
