import { TaskItem } from "./TaskItem";

export const TaskList = ({ taskList, removeTask, editTask }) => {
  return (
    <ul>
      {taskList.map((task) => (
        <TaskItem
          key={task.id} // react specific prop
          id={task.id}
          title={task.title}
          description={task.description}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};
