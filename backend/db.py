from dataclasses import InitVar
from sqlalchemy import create_engine, Column, String, Integer, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///sqlalchemy.sglite', echo=True)  

base = declarative_base()


class todo (base):

    __tablename__ = 'todo_table'

    id = Column(Integer, primary_key=True)
    title = Column(String(100))
    description = Column(String(100))
    task_status = Column(Boolean,default=False)

    def __init__(self,title,description,task_status):
        self.title = title
        self.description = description
        self.task_status = task_status

base.metadata.create_all(engine)
    