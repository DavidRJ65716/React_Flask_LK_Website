from flask import Flask
import time
from datetime import datetime

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/date')
def get_current_date():
    return{'date': datetime.now()}