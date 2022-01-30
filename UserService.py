import psycopg2


def AddUser(firstname, lastname, emailid, password, repeat_password):
    connection = psycopg2.connect(
        host="localhost", user="jasminegarg", password="root", port="5432", database="CWE")
    cur = connection.cursor()
    cur.execute("INSERT INTO user1 (firstname, lastname, emailid, password, repeat_password) VALUES(%s, %s, %s, %s, %s)",
                (firstname, lastname, emailid.lower(), password, repeat_password))
    connection.commit()
    return True
