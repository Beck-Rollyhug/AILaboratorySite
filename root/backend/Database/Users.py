from Database.database import Database


class Users(Database):

    def add(self, user):
        data = user.get_data()
        fields_name = '"' + '", "'.join(data.keys()) + '"'
        fields_val = "'" + "', '".join(data.values()) + "'"
        query = """
            INSERT INTO public."Users"({fields_name})
                VALUES ({fields_val});
        """.format(fields_name=fields_name, fields_val=fields_val)
        return self._execute(query)

    def find(self, user):
        fltr = " and ".join([f"\"{k}\"='{v}'"for k, v in user.get_data().items()])
        query = f"""
        select * from "Users"
        where {fltr}
        LIMIT 1
        """
        res = self._execute(query, wait_res=True)[0]
        return User(*res)

class User:
    def __init__(self, id=None, email=None, password=None, full_name=None, university=None,
                 study_group=None, study_year=None, study_program=None, phone=None,
                 other_contact=None, mails_count=None):
        self.id = id
        self.email = email
        self.password = password
        self.full_name = full_name
        self.university = university
        self.study_group = study_group
        self.study_year = study_year
        self.study_program = study_program
        self.phone = phone
        self.other_contact = other_contact
        self.mails_count = mails_count

    def get_data(self):
        data = self.__dict__
        return {k: v for k, v in data.items() if v}
