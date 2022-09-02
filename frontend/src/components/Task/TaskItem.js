import { Fragment, useState } from "react";

import { CustomBtn } from "../UI/CustomBtn";
import { EditTaskModal } from "../UI/EditTaskModal";
import styles from "./TaskItem.module.css";

export const TaskItem = ({ id, title, description, removeTask, editTask }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const completeTaskHandler = () => {
    setIsComplete(true);
  };

  const removeTaskHandler = () => {
    removeTask(id);
  };

  const enableTaskEditingHandler = () => {
    setIsEditing(true);
  };

  const disableTaskEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Fragment>
      {isEditing && (
        <EditTaskModal
          id={id}
          title={title}
          description={description}
          disableModal={disableTaskEditingHandler}
          editTask={editTask}
        />
      )}
      <li
        className={`${styles["task-item"]} ${
          isComplete ? styles.complete : null
        }`}
      >
        <div className={styles["task-content"]}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className={styles["task-buttons"]}>
          {!isComplete && (
            <CustomBtn
              className={styles["btn-complete"]}
              onClick={completeTaskHandler}
            >
              Complete
            </CustomBtn>
          )}
          {!isComplete && (
            <CustomBtn
              className={styles["btn-edit"]}
              onClick={enableTaskEditingHandler}
            >
              Edit
            </CustomBtn>
          )}
          <CustomBtn
            className={styles["btn-delete"]}
            onClick={removeTaskHandler}
          >
            Delete
          </CustomBtn>
        </div>
      </li>
    </Fragment>
  );
};
