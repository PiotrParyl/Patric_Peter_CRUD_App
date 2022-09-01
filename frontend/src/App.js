import { Fragment, useState } from "react";

import { Header } from "./components/Layout/Header";
import { CreateTask } from "./components/Task/CreateTask";
import { TaskList } from "./components/Task/TaskList";
import styles from "./App.module.css";

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "t0",
      title: "Task1",
      description: "This is my first task",
    },
    {
      id: "t1",
      title: "Task2",
      description: "This is my second task",
    },
    {
      id: "t2",
      title: "Task3",
      description: "This is another task",
    },
    {
      id: "t3",
      title: "Task4",
      description: "One more task here",
    },
  ]);

  const handleAddTask = (data) => {
    const newTaskList = [...tasks]; // copy arr to prevent mutable state

    newTaskList.push(data);

    setTasks(newTaskList);

    console.log(newTaskList);
  };

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <CreateTask handleAddTask={handleAddTask} listLength={tasks.length} />
        <TaskList taskList={tasks} />
      </main>
    </Fragment>
  );
};
