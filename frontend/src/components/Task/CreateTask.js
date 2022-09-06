import { useRef, useState } from "react";
import { nanoid } from "nanoid";

import { CustomBtn } from "../UI/CustomBtn";
import { Card } from "../Layout/Card";
import styles from "./CreateTask.module.css";

export const CreateTask = ({ addTask }) => {
  const [titleErr, setTitleErr] = useState(false);
  const [descErr, setDescErr] = useState(false);

  const inputTitle = useRef();
  const inputDesc = useRef();

  const handleTaskData = (e) => {
    e.preventDefault(); // prevent browser refresh

    /**
     * @param inputTitle.current.value user's title input
     * @param inputDesc.current.value  user's description input
     * @param nanoid()                 third party method - this creates random IDs
     * @param addTask(taskData)        method from App.js file - that getting user's input data after certain logical operations inside this method (handleTaskData)
     * */

    if (!inputTitle.current.value) {
      setTitleErr(true);
    }

    if (!inputDesc.current.value) {
      setDescErr(true);
    }

    if (inputTitle.current.value && inputDesc.current.value) {
      const taskData = {
        id: `task_${nanoid()}`, // nanoid() -> third party method - this creates random IDs
        title: inputTitle.current.value.trim(),
        description: inputDesc.current.value.trim(),
      };
      addTask(taskData);
      setTitleErr(false);
      setDescErr(false);

      inputTitle.current.value = "";
      inputDesc.current.value = "";
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
    if (!inputDesc.current.value) {
      setDescErr(true);
    } else {
      setDescErr(false);
    }
  };

  return (
    <Card>
      <form method="POST" className={styles.form} onSubmit={handleTaskData}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className={titleErr ? styles.err : null}
            placeholder={titleErr ? "Field required!" : null}
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
            className={descErr ? styles.err : null}
            placeholder={descErr ? "Field required!" : null}
            type="text"
            id={"description"}
            ref={inputDesc}
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
