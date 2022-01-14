import json
import uuid
import Database.bl_funcs as bl_funcs

from aiohttp import web
from aiohttp_session import get_session, setup, SimpleCookieStorage


def start_server():
    uuids = []
    routes = web.RouteTableDef()

    @routes.get('/api/check_uuid')
    async def check_uuid(request):
        session = await get_session(request)
        my_uuid = session.get('auth')
        if my_uuid in uuids:
            return web.Response(status=200, text=json.dumps({'status': 210}))
        return web.Response(status=200, text=json.dumps({'status': 400}))

    @routes.post('/api/profile')
    async def get_user(request):
        user_id = request.json().get('user_id')
        if user_id:
            bl_funcs.find_user({})
        return web.Response(status=200, text=json.dumps({'status': 0}))

    @routes.post('/api/login')
    async def log_in(request):
        my_uuid = uuid.uuid4()
        session = await get_session(request)
        session['auth'] = f"{my_uuid}"
        uuids.append(session['auth'])
        server_data = await request.post()
        login = server_data.get('email')
        password = server_data.get('password')
        if login and password:
            print('data was delivered')
            user = bl_funcs.find_user(server_data)
            if user.get('id'):
                return web.Response(status=200, text=json.dumps({'user_id': user.id, 'status': 10}))
        return web.json_response({'status': 120})

    @routes.post('/api/reg')
    async def sign_in(request):
        server_data = await request.json()
        login = server_data['email']
        password = server_data['pass']
        full_name = server_data['name']
        if login and password and full_name:
            if not bl_funcs.find_user(server_data):
                bl_funcs.add_user(server_data)
                user = bl_funcs.find_user(server_data)
                return web.Response(status=200, text=json.dumps({'user_id': user.get('id'), 'status': 40}))
            return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 30}))
        return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 0}))

    app = web.Application()
    setup(app, SimpleCookieStorage())
    app.add_routes(routes)
    web.run_app(app)
