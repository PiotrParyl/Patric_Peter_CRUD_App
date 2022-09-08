import { Fragment, useState, useEffect } from "react";

import { Header } from "./components/Layout/Header";
import { CreateTask } from "./components/Task/CreateTask";
import { TaskList } from "./components/Task/TaskList";
import styles from "./App.module.css";

let IS_INIT = true;

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
    /*==================== New fetch ====================*/
  ]);

  /* POST TASK LIST */
  useEffect(() => {
    const sendTasksData = async () => {
      const url = "/create-task";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasks),
      };
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        const msg = "Sending cart data failed!";
        throw new Error(msg);
      }
    };

    if (IS_INIT) {
      IS_INIT = false;
      return;
    }

    sendTasksData().catch((err) => {
      throw new Error(err.message);
    });
  }, [tasks]);

  /* GET TASK LIST */
  useEffect(() => {
    const fetchTaskList = async () => {
      const url = "/fetch-task-list";
      const response = await fetch(url);

      if (!response.ok) {
        const msg = "Fetching tasks data failed!";
        throw new Error(msg);
      }

      const taskListData = await response.json();

      validateData(taskListData);

      setTasks(taskListData);
    };

    const validateData = (data) => {
      if (!data) {
        fetchTaskList().catch((err) => {
          throw new Error(err.message);
        });
      }
    };
  }, []);

  const addTaskHandler = (data) => {
    const newTaskList = [...tasks];

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
