import { CustomBtn } from "../UI/CustomBtn";
import { Card } from "../Layout/Card";
import styles from "./CreateTask.module.css";

export const CreateTask = () => {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <input type="text" id={"name"} />
        </div>

        <div className={styles.description}>
          <label htmlFor="description">Description</label>
          <input type="text" id={"description"} />
        </div>

        <CustomBtn className={styles.btn} type={"submit"}>
          Add Task
        </CustomBtn>
      </form>
    </Card>
  );
};
