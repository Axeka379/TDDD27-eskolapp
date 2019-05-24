from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer


class JwtTokenAuthMiddleware:
    """
    JWT token authorization middleware for Django Channels 2
    """

    def __init__(self, inner):
        self.inner = inner

    def __call__(self, scope):
        token_header = dict(scope['headers'])[b'sec-websocket-protocol'].decode().split()
        data = {'token': token_header[1]}
        valid_data = VerifyJSONWebTokenSerializer().validate(data)
        user = valid_data['user']
        scope['user'] = user
        scope['token'] = token_header[1]
        return self.inner(scope)