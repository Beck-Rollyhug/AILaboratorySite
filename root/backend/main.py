from backend_server import start_server
from Database import bl_funcs

projects = bl_funcs.get_projects()
start_server()
