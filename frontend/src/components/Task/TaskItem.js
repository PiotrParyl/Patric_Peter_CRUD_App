import { CustomBtn } from "../UI/CustomBtn";
import styles from "./TaskItem.module.css";

export const TaskItem = ({ title, description }) => {
  return (
    <li className={styles["task-item"]}>
      <div className={styles["task-content"]}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className={styles["task-buttons"]}>
        <CustomBtn className={styles["btn-complete"]}>Complete</CustomBtn>
        <CustomBtn className={styles["btn-delete"]}>Delete</CustomBtn>
      </div>
    </li>
  );
};
