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
        except psycopg2.ProgrammingError as e:
            print(f"Error: {e}")
            res = None
        finally:
            con.close()
        return res

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
