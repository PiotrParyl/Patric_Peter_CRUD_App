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

  const getEditDataHandler = (e) => {
    e.preventDefault();

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

        <form className={styles.form} onSubmit={getEditDataHandler}>
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

          <CustomBtn className={styles.btn} type={"submit"}>
            Edit
          </CustomBtn>
        </form>
      </div>
    </Fragment>
  );
};
