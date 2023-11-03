from flask import Flask, Blueprint, render_template,redirect
from flask_mysqldb import MySQL

website_db_bp = Blueprint('website_db', __name__, template_folder='database')

#website_db_bp.config['MYSQL_HOST'] = 'localhost'
#website_db_bp.config['MYSQL_USER'] = 'guess'
#website_db_bp.config['MYSQL_PASSWORD'] = '4[Wkb0XM-kyhGZLC'
#website_db_bp.config['MYSQL_DB'] = 'main_website' 
#mydb = MySQL(website_db_bp)


#@website_db_bp.route('/Api/dblogin')
#def db_login():
#    try:
#        cur = mydb.connection.cursor()
#        cur.execute("""SELECT * FROM `employee` WHERE 1""")
#        rv = cur.fetchall()
#        print("200 ok\n")
#        print(str(rv))
#    except:
#        print("Failed to connect to database")
 