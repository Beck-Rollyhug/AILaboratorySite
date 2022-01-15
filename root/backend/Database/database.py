import psycopg2
import json
from psycopg2.extras import RealDictCursor


def _get_pass():
    with open("Database/settings.json") as json_data:
        settings = json.load(json_data)
        return settings['password']


class Database:
    """
    Класс для работы с БД
    Не рекомендуется использовать самостоятельно!
    """
    password = _get_pass()

    @staticmethod
    def execute(query, *args):
        con = Database.__connect()
        if not con:
            return None
        cursor = con.cursor(cursor_factory=RealDictCursor)
        try:
            cursor.execute(query, args)
            res = cursor.fetchall()
            res = [dict(rc) for rc in res]
        except psycopg2.ProgrammingError as e:
            print(f"Error: {e}")
            res = None
        finally:
            con.close()
        return res

    @staticmethod
    def add(table, names, values):
        """
        Добавить пользователя в бд.
        data: Словарь -- {название поля в бд: значение}
        """
        data = ", ".join(['%s' for val in values])
        query = f"""
            INSERT INTO "{table}"({names})
                VALUES ({data});
        """
        return Database.execute(query, *list(values))

    @staticmethod
    def delete(table, filter):
        """
        удалить строки из бд
        filter: Словарь -- {название поля в бд: значение}
        """
        fltr = " and ".join([f'"{key}"=%s' for key in filter.keys()])
        query = f"""
        DELETE FROM "{table}"
        WHERE {fltr}
        """
        return Database.execute(query, *list(filter.values()))

    @staticmethod
    def get_all_from(table):
        query = f"""
        select * from "{table}"
        """
        return Database.execute(query)

    @staticmethod
    def find(table, search_filter):
        """
        Добавить пользователя в бд.
        data: Словарь -- {название поля в бд: значение}
        """
        fltr = " and ".join([f'"{key}"=%s' for key in search_filter.keys()])
        query = f"""
        select * from "{table}"
        where {fltr}
        """
        return Database.execute(query, *list(search_filter.values()))

    @staticmethod
    def update(table, data: dict):
        """
        Добавить пользователя в бд.
        data: Словарь -- {название поля в бд: значение}
        """
        id = data.pop('id')
        fltr = ", ".join([f'"{key}"=%s' for key in data])
        query = f"""
        UPDATE "{table}"
        SET {fltr}
        WHERE id='{id}'
        """
        return Database.execute(query, *list(data.values()))

    @staticmethod
    def __connect():
        try:
            con = psycopg2.connect(
                user="postgres",
                password=Database.password,
                host="127.0.0.1",
                port="5432",
                database="laboratoryDB"
            )
            con.autocommit = True
        except psycopg2.OperationalError as e:
            con = None
            print(f"Error: {e}")
        return con
