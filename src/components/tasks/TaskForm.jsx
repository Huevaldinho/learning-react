import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //Para poder agregar tareas al array tasks del contexto
  const { createTask,deleteAllTasks } = useContext(TaskContext);

  //Funcion para manejar el submit de los datos del form
  const handleSubmit = (e) => {
    e.preventDefault();//para que no reinicie la pagina con el boton
    createTask({ title, description });//funcion del contexto para modificar las tasks
    //Limpia titulo y descripcion despues de agregar la tarea
    setTitle("");
    setDescription("");
  };


  return (
    <div className="max-w-md mx-auto bg-slate-800 m-10 rounded-lg">
      <form className="pt-10 pb-1 pr-10 pl-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);//actualiza el estado del titulo con cada cambio
          }}
          value={title}
          autoFocus
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);//actualiza el estado de la description con cada cambio
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Guardar</button>
      </form>
      <button className=' bg-red-500 rounded-md  hover:bg-red-300 text-white mt-5 ml-4 mr-5 mb-4 p-2'
      onClick={deleteAllTasks}>Eliminar todas las tareas</button>
    </div>
  );
}

export default TaskForm;
