import json
import uuid
import Database.database as db
import Database.bl_funcs as bl_funcs

from aiohttp import web
from aiohttp_session import get_session, setup, SimpleCookieStorage


def start_server():
    uuids = []
    routes = web.RouteTableDef()

    @routes.get('/api/admin/projects')
    async def get_projects_for_admin():
        projects = bl_funcs.get_projects()
        return web.Response(status=200, text=json.dumps({'projects': projects}))

    @routes.get('/api/projects')
    async def get_all_projects():
        project = db.Database.get_all_from('Project')
        return web.Response(status=200, text=json.dumps({'projects': project}))

    @routes.get('/api/landing')
    async def get_news():
        news = db.Database.get_all_from('Article')
        parents = bl_funcs.get_photo_partners()
        return web.Response(status=200, text=json.dumps({'data': {'articles': news, 'parents': parents}}))

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
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        user_id = server_data.get('id')
        if user_id:
            user_data = db.Database.find('Users', server_data)
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
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        login = server_data.get('email')
        password = server_data.get('password')
        if login and password:
            user = db.Database.find('Users', server_data)
            if user:
                user_data = user[0]
                return web.Response(status=200, text=json.dumps({'id': user_data.get('id'), 'status': 10}))
        return web.json_response({'status': 120})

    @routes.post('/api/reg')
    async def sign_in(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        login = server_data.get('email')
        password = server_data.get('password')
        full_name = server_data.get('full_name')
        if login and password and full_name:
            if not db.Database.find('Users', {'email': login}):
                db.Database.add('Users', server_data)
                user = db.Database.find('Users', server_data)[0]
                return web.Response(status=200, text=json.dumps({'user_id': user.get('id'), 'status': 40}))
            return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 30}))
        return web.Response(status=200, text=json.dumps({'user_id': None, 'status': 0}))

    @routes.post('/api/profile/settings')
    async def update_user(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        user_id = server_data.get('id')
        if db.Database.find('Users', {'id': user_id}):
            db.Database.update('Users', server_data)
            return web.Response(status=200, text=json.dumps({'status': 200}))
        return web.Response(status=200, text=json.dumps({'status': 0}))

    @routes.post('/api/project/project_entry')
    async def project_entry(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        user_id = server_data.get('user_id')
        project_id = server_data.get('project_io')
        if user_id and project_id:
            bl_funcs.write_user_on_project(user_id, project_id)
            return web.Response(status=200, text=json.dumps({'status': 200}))
        return web.Response(status=200, text=json.dumps({'status': 0}))

    @routes.post('/api/article/update')
    async def update_new(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        article_id = server_data.get('id')
        if article_id:
            db.Database.update('Articles', server_data)
            return web.Response(status=200, text=json.dumps({'status': 200}))
        return web.Response(status=200, text=json.dumps({'status': 0}))

    @routes.post('/api/article/add')
    async def update_new(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        db.Database.add('Articles', server_data)
        return web.Response(status=200, text=json.dumps({'status': 200}))

    @routes.post('/api/article/delete')
    async def update_new(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        db.Database.delete('Articles', server_data)
        return web.Response(status=200, text=json.dumps({'status': 200}))

    @routes.post('/api/project/add')
    async def add_project(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        db.Database.add('Projects', server_data)
        return web.Response(status=200, text=json.dumps({'status': 200}))

    @routes.post('/api/project/update')
    async def update_project(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        db.Database.update('Projects', server_data)
        return web.Response(status=200, text=json.dumps({'status': 200}))

    @routes.post('/api/project/delete')
    async def delete_project(request):
        # nginx
        # server_data = dict(await request.post())
        # nodeJS
        server_data = dict(await request.json())
        db.Database.delete('Projects', server_data)
        return web.Response(status=200, text=json.dumps({'status': 200}))

    app = web.Application()
    setup(app, SimpleCookieStorage())
    app.add_routes(routes)
    web.run_app(app)
