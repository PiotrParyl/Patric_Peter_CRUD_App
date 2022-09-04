from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os


db = SQLAlchemy()
DB_NAME = "tododatabase.db"

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'


    create_database(app)
    return app


def create_database(app):
    if not os.path.exists('backend/'+ DB_NAME):
        db.create_all(app=app)
        print('Yeeee created db ;))')
