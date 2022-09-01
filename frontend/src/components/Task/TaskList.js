import { Card } from "../Layout/Card";
import { CustomBtn } from "../UI/CustomBtn";
import { TaskItem } from "./TaskItem";
import styles from "./TaskItem.module.css";

export const TaskList = ({ taskList }) => {
  return (
    <ul>
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </ul>
  );
};
