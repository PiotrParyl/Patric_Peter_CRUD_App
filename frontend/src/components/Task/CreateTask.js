import { useRef } from "react";
import { nanoid } from "nanoid";

import { CustomBtn } from "../UI/CustomBtn";
import { Card } from "../Layout/Card";
import styles from "./CreateTask.module.css";

export const CreateTask = ({ addTask }) => {
  const inputTitle = useRef();
  const descName = useRef();

  const handleTaskData = (e) => {
    e.preventDefault();

    const taskData = {
      id: `task_${nanoid()}`,
      title: inputTitle.current.value.trim(),
      description: descName.current.value.trim(),
    };

    addTask(taskData);

    inputTitle.current.value = "";
    descName.current.value = "";
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleTaskData}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id={"title"} ref={inputTitle} />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id={"description"} ref={descName} />
        </div>

        <CustomBtn className={styles.btn} type={"submit"}>
          Add Task
        </CustomBtn>
      </form>
    </Card>
  );
};
