import { useContext } from "react";
import TaskCard from "./TaskCard";
import TaskContext from "../../context/TaskContext";

function TaskList() {
  //para listar las tareas del contexto
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }
  //cada vez que tasks tenga un cambio este comp tiene que volver renderizar.
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        /*Crea tarjetas para cada una de las tareas
        key es para que react identifique internamente a cada comp*/
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
