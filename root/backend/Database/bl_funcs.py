from .database import *


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
        FROM Projects
        where id in (
            SELECT project_id
            FROM UsersProjects
            where user_id='{user_id}' )
    """
    return Database.execute(query)


def write_user_on_project(user_id, project_id):
    Database.add("UsersProjects", {"user_id": user_id, "project_id": project_id})


def del_user_on_project(user_id, project_id):
    Database.delete("UsersProjects", {"user_id": user_id, "project_id": project_id})


def get_projects():
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
            , group_concat(students.id) students
            , group_concat(skills.name) skills
        FROM Projects projects
        left join Partners part on projects.partner_id=part.id
        left join Universities uni on projects.uni_id=uni.id
        left join Users users on projects.manager_id=users.id
        left join Users students on students.id in (
            select user_id
            from UsersProjects us_pr
            where us_pr.project_id=projects.id
        )
        left join Skills skills on skills.id in (
            select skill_id
            from ProjectSkills sk
            where sk.project_id=projects.id
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
