from flask import Flask
import time
from datetime import datetime
from flask_mysqldb import MySQL

app = Flask(__name__, static_folder="../client/build", static_url_path='/')
app.debug = True

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/Api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/Api/date')
def get_current_date():
    return{'date': datetime.now()}
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'guess'
app.config['MYSQL_PASSWORD'] = '4[Wkb0XM-kyhGZLC'
app.config['MYSQL_DB'] = 'main_website'
mydb = MySQL(app)


@app.route('/Api/dblogin')
def db_login():

    cur = mydb.connection.cursor()
    cur.execute("""SELECT * FROM `employee` WHERE 1""")
    rv = cur.fetchall()
    print("200 ok\n")
    print(str(rv))

    return str(rv)


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)