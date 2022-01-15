from Database.database import *


def add_user(data):
    """
    Добавить пользователя в бд.
    data: Словарь -- {название поля в бд: значение}
    """
    fields_name = '"' + '", "'.join(data.keys()) + '"'
    fields_values = ", ".join(['%s' for key in data.values()])
    query = f"""
        INSERT INTO public."Users"({fields_name})
            VALUES ({fields_values});
    """
    return Database.execute(query, *list(data.values()))


def find_user(search_filter):
    """
    Найти пользователя в бд.
    filter: Словарь -- {название поля в бд: значение}
    """
    fltr = " and ".join([f'"{key}"=%s' for key in search_filter.keys()])
    query = f"""
    select * from "Users"
    where {fltr}
    """
    return Database.execute(query, *list(search_filter.values()))


def get_all_project():
    """
    Получить все проекты
    """
    query = """
    select * from "Projects"
    """
    return Database.execute(query)
