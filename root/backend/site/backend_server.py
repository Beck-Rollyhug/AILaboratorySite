import json

from aiohttp import web, ClientSession
from Database.Users import *


def start_server():
    routes = web.RouteTableDef()

    @routes.post('/api/login')
    async def log_in(request):
        server_data = await request.json()
        login = server_data['email']
        password = server_data['pass']
        if login and password:
            print('data was delivered')
            user = Users().find(User(password=password, email=login))
            if user.id:
                return web.Response(status=200, text=json.dumps({'user_id': user.id, 'status': 10}))

        bad_json = {'status': 120}
        return web.json_response(bad_json)

    @routes.post('/api/reg')
    async def sign_in(request):
        server_data = await request.json()
        login = server_data['email']
        password = server_data['pass']
        full_name = server_data['name']
        if login and password and full_name:
            new_user = User(email=login, password=password, full_name=full_name)
            user = Users().find(User(email=login))
            if not user.id:
                Users().add(new_user)
                user_data = Users().find(new_user)
                return web.Response(status=200, text=json.dumps({'user_id': user_data.id, 'status': 40}))
            return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 30}))
        return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 0}))

    app = web.Application()
    app.add_routes(routes)
    web.run_app(app)
