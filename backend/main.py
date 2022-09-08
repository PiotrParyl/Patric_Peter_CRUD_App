from flask import Flask, request
import db
from sqlalchemy.orm import sessionmaker
# import test

Session = sessionmaker(bind=db.engine)
session = Session()




app = Flask(__name__)
    
    
@app.route('/create-task', methods = ['POST','GET'] )
def todo():

    if request.method == 'POST':
        task = request.get_json()
        task_id = task[-1]['id']
        title = task[-1]['title']
        description=task[-1]['description']
        new_task= db.todo(task_id,title,description)
        session.add(new_task)
        session.commit()
        return 'Done'



@app.route('/fetch-task-list')
def get_task():
    id_list = []
    tasks_list = []
    

    my_data = session.query(db.todo)

    for chuj in my_data:
        duet_list = []
        duet_list.append(chuj.title)
        duet_list.append(chuj.description)
        tasks_list.append(duet_list)
        id_list.append(chuj.task_id)
        
        

    return dict(zip(id_list,tasks_list))



if __name__ == "__main__":
    app.run(debug=True)
    