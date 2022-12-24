import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext); //To list all tasks on the context
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }
  //When tasks get an update this component re-render
  return (
    <div className="grid grid-cols-4 gap-2">
      
        {tasks.map((task) => (
          //Keys help React identify which items have changed, are added, or are removed.
          //A good rule of thumb is that elements inside the map() call need keys.
          //Keys serve as a hint to React but they don’t get passed to your components.
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}

export default TaskList;
