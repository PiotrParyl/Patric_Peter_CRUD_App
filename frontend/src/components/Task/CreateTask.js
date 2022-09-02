import { useRef, useState } from "react";
import { nanoid } from "nanoid";

import { CustomBtn } from "../UI/CustomBtn";
import { Card } from "../Layout/Card";
import styles from "./CreateTask.module.css";

export const CreateTask = ({ addTask }) => {
  const [titleErr, setTitleErr] = useState(false);
  const [descErr, setDescErr] = useState(false);

  const inputTitle = useRef();
  const descName = useRef();

  const handleTaskData = (e) => {
    e.preventDefault();

    if (!inputTitle.current.value) {
      setTitleErr(true);
    }

    if (!descName.current.value) {
      setDescErr(true);
    }

    if (inputTitle.current.value && descName.current.value) {
      const taskData = {
        id: `task_${nanoid()}`,
        title: inputTitle.current.value.trim(),
        description: descName.current.value.trim(),
      };
      addTask(taskData);
      setTitleErr(false);
      setDescErr(false);

      inputTitle.current.value = "";
      descName.current.value = "";
    }
  };

  const titleErrHandler = () => {
    if (!inputTitle.current.value) {
      setTitleErr(true);
    } else {
      setTitleErr(false);
    }
  };

  const descErrHandler = () => {
    if (!descName.current.value) {
      setDescErr(true);
    } else {
      setDescErr(false);
    }
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleTaskData}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className={titleErr && styles.err}
            placeholder={titleErr && "Field required!"}
            type="text"
            id={"title"}
            ref={inputTitle}
            autoComplete={"off"}
            onChange={titleErrHandler}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            className={descErr && styles.err}
            placeholder={titleErr && "Field required!"}
            type="text"
            id={"description"}
            ref={descName}
            autoComplete={"off"}
            onChange={descErrHandler}
          />
        </div>

        <CustomBtn className={styles.btn} type={"submit"}>
          Add Task
        </CustomBtn>
      </form>
    </Card>
  );
};
