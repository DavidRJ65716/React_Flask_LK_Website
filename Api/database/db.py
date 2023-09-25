from flask import Flask
from flask_mysqldb import MySQL

dbApp = Flask(__name__)

def dbLoggin(database):
    dbApp.config['MYSQL_HOST'] = 'localhost'
    dbApp.config['MYSQL_USER'] = ''
    dbApp.config['MYSQL_PASSWORD'] = ''
    dbApp.config['MYSQL_DB'] = database
    mydb = MySQL(dbApp)
    return mydb
