from tabnanny import check
from flask import Flask, request
import db
from sqlalchemy.orm import sessionmaker
import test

Session = sessionmaker(bind=db.engine)
session = Session()




app = Flask(__name__)

def get_data():
    title_list = []
    desc_list = []

    my_data = session.query(db.todo)

    for chuj in my_data:
        title_list.append(chuj.title)
        desc_list.append(chuj.description)

    return dict(zip(title_list,desc_list))

    
@app.route('/create-task', methods = ['POST'])
def todo():

    if request.method == 'POST':
        task = request.get_json()
        task_id = task[-1]['id']
        title = task[-1]['title']
        description=task[-1]['description']
        new_task= db.todo(task_id,title,description)
        session.add(new_task)
        session.commit()
        return 'Done',201

@app.route('/get-task')
def get_task():
    return get_data()



if __name__ == "__main__":
    app.run(debug=True)
    