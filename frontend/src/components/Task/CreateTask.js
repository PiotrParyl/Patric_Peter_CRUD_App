import { useRef } from "react";

import { CustomBtn } from "../UI/CustomBtn";
import { Card } from "../Layout/Card";
import styles from "./CreateTask.module.css";

export const CreateTask = ({ listLength, handleAddTask }) => {
  const inputName = useRef();
  const descName = useRef();

  const handleTaskData = (e) => {
    e.preventDefault();

    const taskData = {
      id: `t${listLength}`, // depends on tasks quantity t1, t2 ... tn
      title: inputName.current.value.trim(),
      description: descName.current.value.trim(),
    };

    handleAddTask(taskData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleTaskData}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id={"name"} ref={inputName} />
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
