from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import os
import db
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=db.engine)
session = Session()




app = Flask(__name__)



@app.route('/todo', methods = ['POST'])
def todo():

    task = request.get_json()
    print()
    return 'Done',201


if __name__ == "__main__":
    app.run(debug=True)
    