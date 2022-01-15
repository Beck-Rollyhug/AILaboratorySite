from .database import *


def get_all_users():
    return Database.get_all_from("Users")


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
    Database.add("UsersProjects", '"user_id", "project_id"', [user_id, project_id])


def del_user_on_project(user_id, project_id):
    Database.delete("UsersProjects", {"user_id":user_id, "project_id":project_id})


def get_all_project():
    """
    Получить все проекты
    """
    return Database.get_all_from("Projects")


def update_new(data):
    """
    Изменить данные о новости. ВАЖНО!!! Наличие поля id обязательно !!!
    filter: Словарь -- {название поля в бд: значение}
    """
    return Database.update("Users", data)


def add_new(data):
    """
    Добавить пользователя в бд.
    data: Словарь -- {название поля в бд: значение}
    """
    names = '"' + '", "'.join(data.keys()) + '"'
    return Database.add("Articles", names, data.values())


def get_projects_for_admin():
    """
    Получить все проекты для админа
    """
    query = f"""
        SELECT
            projects.id
            , projects.title
            , projects.description
            , projects.users_limit
            , part.name as partner_name
            , uni.name as uni_name
            , users.full_name as manager_name
            , users.email as manager_email
            , array_agg(students.id) students
        FROM "Projects" projects
        left join "Partners" part on projects.partner_id=part.id
        left join "Universities" uni on projects.uni_id=uni.id
        left join "Users" users on projects.manager_id=users.id
        left join "Users" students on students.id in (
            select "user_id"
            from "UsersProjects" us_pr
            where us_pr."project_id"=projects.id
        )
        group by 
            projects.id
            , projects.title
            , projects.description
            , projects.users_limit
            , part.name
            , uni.name
            , users.full_name
            , users.email
    """
    return Database.execute(query)


