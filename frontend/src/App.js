import { Fragment, useState } from "react";

import { Header } from "./components/Layout/Header";
import { CreateTask } from "./components/Task/CreateTask";
import { TaskList } from "./components/Task/TaskList";
import styles from "./App.module.css";

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "task_demo_0",
      title: "Task1",
      description: "This is my first task",
    },
    {
      id: "task_demo_1",
      title: "Task2",
      description: "This is my second task",
    },
    {
      id: "task_demo_2",
      title: "Task3",
      description: "This is another task",
    },
    {
      id: "task_demo_3",
      title: "Task4",
      description: "One more task here",
    },
  ]);

  const addTaskHandler = (data) => {
    const newTaskList = [...tasks]; // copy arr to prevent mutable state

    newTaskList.push(data);

    setTasks(newTaskList);
  };

  const removeTaskHandler = (id) => {
    let newTaskList = [...tasks];
    newTaskList = newTaskList.filter((task) => task.id !== id);
    setTasks(newTaskList);
  };

  const editTaskHandler = (data) => {
    let newTasksList = [...tasks];
    const editingItemIndex = newTasksList.findIndex((el) => el.id === data.id);

    newTasksList[editingItemIndex].title = data.title;
    newTasksList[editingItemIndex].description = data.description;

    setTasks(newTasksList);
    console.log(editingItemIndex);
    console.log(data.id);
  };

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <CreateTask addTask={addTaskHandler} />
        <TaskList
          taskList={tasks}
          removeTask={removeTaskHandler}
          editTask={editTaskHandler}
        />
      </main>
    </Fragment>
  );
};
