
import db
from sqlalchemy.orm import sessionmaker
from db import session
from sqlalchemy import update

def get_data():
    id_list = []
    tasks_list = []
    

    my_data = session.query(db.todo)

    for chuj in my_data:
        duet_list = []
        duet_list.append(chuj.title)
        duet_list.append(chuj.description)
        tasks_list.append(duet_list)
        id_list.append(chuj.task_id)
        
        

    #return dict(zip(id_list,tasks_list))

 


print(get_data())

def select_data(id):

    my_data = session.query(db.todo).filter_by(task_id=id).first()

    print(my_data.description)

#select_data('task_xGnQrPFZPupBrf2BBqf3Z')


def replace_data(id,new_title):
    title = session.query(db.todo).filter_by(task_id=id).first()
    title.title = new_title
    session.commit()


#replace_data("task_beVPvv5ea6vsC3DbDBb8G",'dzikidziki')


