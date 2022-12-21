import { useContext } from "react";
import TaskCard from "./TaskCard";
import TaskContext from "../../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);//To list all tasks on the context
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
        /* Create card for every task, the key is for react to know that 
        the component has a unique key to identificate.*/
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
