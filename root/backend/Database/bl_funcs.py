from .database import *


def add_user(data):
    """
    Добавить пользователя в бд.
    data: Словарь -- {название поля в бд: значение}
    """
    names = '"' + '", "'.join(data.keys()) + '"'
    values = ", ".join(['%s' for val in data.values()])
    return Database.add("Users", names, values, data.values())


def find_user(search_filter):
    """
    Найти пользователя в бд.
    filter: Словарь -- {название поля в бд: значение}
    """
    return Database.find("Users", search_filter)


def update_user(data):
    """
    Изменить данные о пользователе. ВАЖНО!!! Наличие поля id обязательно !!!
    filter: Словарь -- {название поля в бд: значение}
    """
    return Database.update("Users", data)


def get_user_projects():
    pass


def write_user_on_project(user_id, project_id):
    Database.add("UsersProjects", '"user_id", "project_id"', '%s, %s', [user_id, project_id])


def get_all_project():
    """
    Получить все проекты
    """
    query = """
    select * from "Projects"
    """
    return Database.execute(query)
