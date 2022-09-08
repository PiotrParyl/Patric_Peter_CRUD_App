from sqlite3 import connect
from sqlalchemy import create_engine, Column, String, Integer, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import sqlalchemy

SQLALCHEMY_DATABASE_URL = 'sqlite:///./siema.db'

engine =   sqlalchemy.create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread":False})

base = declarative_base()


class todo (base):

    __tablename__ = 'todo_table'

    id = Column(Integer, primary_key=True)

    task_id = Column(String(100))
    title = Column(String(100))
    description = Column(String(100))

    def init(self,task_id,title,description):
        self.task_id = task_id
        self.title = title
        self.description = description

Session = sessionmaker(bind=engine)
session = Session()

base.metadata.create_all(engine)