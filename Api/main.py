from flask import Flask
from flask_mysqldb import MySQL
import time
from datetime import datetime
from database.db import website_db_bp

app = Flask(__name__, static_folder="../client/build", static_url_path='/')
app.register_blueprint(website_db_bp)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/Api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/Api/date')
def get_current_date():
    return{'date': datetime.now()}

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)