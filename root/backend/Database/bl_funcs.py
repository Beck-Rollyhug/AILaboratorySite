from .database import *


def add_user(data):
    """
    Добавить пользователя в бд.
    data: Словарь -- {название поля в бд: значение}
    """
    names = '"' + '", "'.join(data.keys()) + '"'
    return Database.add("Users", names, data.values())


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


def get_photo_partners():
    """
    Получить всех партнеров
    """
    return Database.get_all_from("Partners")


def get_user_projects(user_id):
    """
    Получить все проекты, на которые записан пользователь
    """
    query = f"""
        SELECT * 
        FROM "Projects"
        where "id" in (
            SELECT "project_id"
            FROM "UsersProjects"
            where "user_id"='{user_id}' )
    """
    return Database.execute(query)


def get_all_news():
    """
    Получить все новости
    """
    return Database.get_all_from("Articles")


def write_user_on_project(user_id, project_id):
    Database.add("UsersProjects", '"user_id", "project_id"', [user_id, project_id])


def get_all_project():
    """
    Получить все проекты
    """
    return Database.get_all_from("Projects")
