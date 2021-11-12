import psycopg2
import json
from psycopg2 import Error
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT


class Database:
    """
    Базовый класс для работы с БД
    Не рекомендуется создавать объекты напрямую!
    """
    connection = None

    def __init__(self):
        if not self.connection:
            try:
                self._connect()
                Database.is_conn = True
            except (Exception, Error) as error:
                print("Ошибка при работе с PostgreSQL", error)
                Database.is_conn = False
        self.connection = Database.connection

    @staticmethod
    def _connect():
        # Подключение к существующей базе данных
        with open("Database/settings.json") as json_data:
            settings = json.load(json_data)
            connection = psycopg2.connect(user="postgres",
                                          # пароль, который указали при установке PostgreSQL
                                          password=settings['password'],
                                          host="127.0.0.1",
                                          port="5432",
                                          database="laboratoryDB")
            connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
            # Курсор для выполнения операций с базой данных
            #cursor = connection.cursor()
            #sql_create_database = 'create database postgres_db'
            #cursor.execute(sql_create_database)
            Database.connection = connection
            print("Соединение установлено")

    def _execute(self, query, wait_res=False):
        with self.connection.cursor() as cursor:
            cursor.execute(query)
            if wait_res:
                res = cursor.fetchall()
            else:
                res = cursor.statusmessage
            self.connection.commit()
        return res

    def exit(self):
        if self.connection:
            self.connection.close()
            print("Cоединение закрыто")

