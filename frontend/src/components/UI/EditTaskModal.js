import { Fragment, useRef } from "react";

import styles from "./EditTaskModal.module.css";
import { CustomBtn } from "./CustomBtn";

export const EditTaskModal = ({
  id,
  title,
  description,
  disableModal,
  editTask,
}) => {
  const titleRef = useRef(title);
  const descRef = useRef(description);

  const getEditDataHandler = () => {
    const editData = {
      id,
      title: titleRef.current.value,
      description: descRef.current.value,
    };
    editTask(editData);
    disableModal();
  };

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={disableModal}></div>
      <div className={styles.modal}>
        <header>
          <h3>Edit Task</h3>
        </header>

        <div className={styles.inputs}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id={"title"}
              type="text"
              defaultValue={title}
              ref={titleRef}
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <input
              id={"description"}
              type="text"
              defaultValue={description}
              ref={descRef}
            />
          </div>
        </div>

        <footer>
          <CustomBtn className={styles.btn} onClick={getEditDataHandler}>
            Edit
          </CustomBtn>
        </footer>
      </div>
    </Fragment>
  );
};
