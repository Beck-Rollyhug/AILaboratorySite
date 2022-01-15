import json
import base64
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
        # nginx
        server_data = dict(await request.post())
        # nodeJS
        # server_data = await request.json()
        user_id = server_data.get('id')
        if user_id:
            user_data = bl_funcs.find_user(server_data)
            if user_data:
                result = user_data[0]
                user_projects = bl_funcs.get_user_projects(user_id)
                result.update({'projects': user_projects})
                return web.Response(status=200, text=json.dumps({'status': 200, 'data': result}))
        return web.Response(status=200, text=json.dumps({'status': 0}))

    @routes.post('/api/login')
    async def log_in(request):
        my_uuid = uuid.uuid4()
        session = await get_session(request)
        session['auth'] = f"{my_uuid}"
        uuids.append(session['auth'])
        # nginx
        server_data = dict(await request.post())
        # nodeJS
        # server_data = await request.json()
        login = server_data.get('email')
        password = server_data.get('password')
        if login and password:
            user = bl_funcs.find_user(server_data)
            if user:
                user_data = user[0]
                return web.Response(status=200, text=json.dumps({'id': user_data.get('id'), 'status': 10}))
        return web.json_response({'status': 120})

    @routes.post('/api/reg')
    async def sign_in(request):
        # nginx
        server_data = dict(await request.post())
        # nodeJS
        # server_data = await request.json()
        login = server_data.get('email')
        password = server_data.get('password')
        full_name = server_data.get('full_name')
        if login and password and full_name:
            if not bl_funcs.find_user({'email': login}):
                bl_funcs.add_user(server_data)
                user = bl_funcs.find_user(server_data)[0]
                return web.Response(status=200, text=json.dumps({'user_id': user.get('id'), 'status': 40}))
            return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 30}))
        return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 0}))

    @routes.post('/api/profile/settings')
    async def update_user(request):
        # nginx
        server_data = dict(await request.post())
        # nodeJS
        # server_data = dict(await request.json())
        user_id = server_data.get('id')
        if bl_funcs.find_user({'id': user_id}):
            bl_funcs.update_user(server_data)
            return web.Response(status=200, text=json.dumps({'status': 200}))
        return web.Response(status=200, text=json.dumps({'status': 0}))

    @routes.post('/api/project/project_entry')
    async def project_entry(request):
        # nginx
        server_data = dict(await request.post())
        # nodeJS
        # server_data = dict(await request.json())
        user_id = server_data.get('user_id')
        project_id = server_data.get('project_io')
        if user_id and project_id:
            bl_funcs.write_user_on_project(user_id, project_id)
            return web.Response(status=200, text=json.dumps({'status': 200}))
        return web.Response(status=200, text=json.dumps({'status': 0}))

    app = web.Application()
    setup(app, SimpleCookieStorage())
    app.add_routes(routes)
    web.run_app(app)
