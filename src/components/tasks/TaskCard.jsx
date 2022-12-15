import { useContext } from "react";
import TaskContext from "../../context/TaskContext";

function TaskCard({ task }) {
  //Recibe un json con los datos de la tarea (task)
  /*
    task={title:value,description:value,id:value}
  */
  const { deleteTask } = useContext(TaskContext);//para eliminar tarea
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}
export default TaskCard;
