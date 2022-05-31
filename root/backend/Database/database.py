import mysql.connector
import json


def _get_data(field_name):
    with open("Database/settings.json") as json_data:
        settings = json.load(json_data)
        return settings[field_name]


class Database:
    """
    Класс для работы с БД
    Не рекомендуется использовать самостоятельно!
    """
    @staticmethod
    def execute(query, *args):
        con = Database.__connect()
        if not con:
            return None
        cursor = con.cursor(dictionary=True)
        try:
            cursor.execute(query, args)
            res = cursor.fetchall()
            res = [dict(rc) for rc in res]
        except mysql.connector.ProgrammingError as e:
            print(f"Error: {e}")
            res = None
        finally:
            con.close()
        return res

    @staticmethod
    def add(table, data):
        """
        Добавить пользователя в бд.
        data: Словарь -- {название поля в бд: значение}
        """
        names = '' + ', '.join(data.keys()) + ''
        ss = ", ".join(['%s' for val in data.values()])
        query = f"""
            INSERT INTO {table} ({names})
                VALUES ({ss});
        """
        return Database.execute(query, *list(data.values()))

    @staticmethod
    def delete(table, filter):
        """
        удалить строки из бд
        filter: Словарь -- {название поля в бд: значение}
        """
        fltr = " and ".join([f'{key}=%s' for key in filter.keys()])
        query = f"""
        DELETE FROM {table}
        WHERE {fltr}
        """
        return Database.execute(query, *list(filter.values()))

    @staticmethod
    def get_all_from(table):
        query = f"""
        select * from {table}
        """
        return Database.execute(query)

    @staticmethod
    def find(table, search_filter):
        """
        Добавить пользователя в бд.
        data: Словарь -- {название поля в бд: значение}
        """
        fltr = " and ".join([f'{key}=%s' for key in search_filter.keys()])
        query = f"""
        select * from {table}
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
        fltr = ", ".join([f'{key}=%s' for key in data])
        query = f"""
        UPDATE {table}
        SET {fltr}
        WHERE id='{id}'
        """
        return Database.execute(query, *list(data.values()))

    @staticmethod
    def __connect():
        try:
            host = _get_data('host')
            port = _get_data('port')
            user = _get_data('user')
            password = _get_data('password')
            database = _get_data('database')

            con = mysql.connector.connect(
                user=user,
                password=password,
                host=host,
                port=port,
                database=database
            )
            con.autocommit = True
        except mysql.connector.OperationalError as e:
            con = None
            print(f"Error: {e}")
        return con
