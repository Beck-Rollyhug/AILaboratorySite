import json
import uuid

from aiohttp import web, ClientSession
from aiohttp_session import get_session, setup, SimpleCookieStorage
from Database.bl_funcs import *


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

    @routes.post('/api/login')
    async def log_in(request):
        my_uuid = uuid.uuid4()
        session = await get_session(request)
        session['auth'] = f"{my_uuid}"
        uuids.append(session['auth'])
        server_data = await request.json()
        login = server_data['email']
        password = server_data['pass']
        if login and password:
            print('data was delivered')
            # user = Users().find(User(password=password, email=login))
            user = find_user(
                {
                    "email": login,
                    "password": password
                })
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
            user = find_user(
                {
                    "email": login
                })
            if not user.id:
                new_user = add_user(
                    {
                        "email": login,
                        "password": password,
                        "full_name": full_name
                    }
                )
                user_data = find_user({"email": login})
                return web.Response(status=200, text=json.dumps({'user_id': user_data.id, 'status': 40}))
            """
            new_user = User(email=login, password=password, full_name=full_name)
            user = Users().find(User(email=login))
            if not user.id:
                Users().add(new_user)
                user_data = Users().find(new_user)
                return web.Response(status=200, text=json.dumps({'user_id': user_data.id, 'status': 40}))
                """
            return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 30}))
        return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 0}))

    app = web.Application()
    setup(app, SimpleCookieStorage())
    app.add_routes(routes)
    web.run_app(app)
