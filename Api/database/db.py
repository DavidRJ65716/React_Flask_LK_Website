from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)



app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'guess'
app.config['MYSQL_PASSWORD'] = '4[Wkb0XM-kyhGZLC'
app.config['MYSQL_DB'] = 'main_website'
mydb = MySQL(app)


@app.route('/Api/dblogin')
def db_login():
    try:
        cur = mydb.connection.cursor()
        cur.execute("""SELECT * FROM `employee` WHERE 1""")
        rv = cur.fetchall()
        print("200 ok\n")
        print(str(rv))
    except:
        print("Failed to connect to database")
