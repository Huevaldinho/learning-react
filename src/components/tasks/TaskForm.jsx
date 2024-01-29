import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import {getNotes} from '../../services/note.services'

function TaskForm() {
  const { createTask, deleteAllTasks } = useContext(TaskContext); //To create and delete tasks.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /**
   * Function to handle the submit of the form
   */
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent the page to refresh when clicking the button
    createTask({ title, description }); //Context function to create a new task
    //Clean the title and description after adding the task.
    setTitle("");
    setDescription("");
  };
  const handleGetNotes =async (e)=>{
    e.preventDefault();
    getNotes(2);

  }

  

  return (
    <div className="max-w-md mx-auto bg-slate-800 m-10 rounded-lg">
      <form className="pt-10 pb-1 pr-10 pl-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2 rounded-lg"
          placeholder="Nombre de la tarea"
          onChange={(e) => {
            setTitle(e.target.value); //updates the title on change
          }}
          value={title}
          autoFocus
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-lg"
          placeholder="Descripción de la tarea"
          onChange={(e) => {
            setDescription(e.target.value); //updates the description on change
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">
          Guardar
        </button>
      </form>

      <button
        className=" bg-red-500 rounded-md  hover:bg-red-300 text-white mt-5 ml-4 mr-5 mb-4 p-2"
        onClick={deleteAllTasks}
      >
        Eliminar todas las tareas
      </button>
      <button className="bg-green-500 rounded-md  hover:bg-red-300 text-white mt-5 ml-4 mr-5 mb-4 p-2"
      onClick={handleGetNotes}>
        Pedir notas.
      </button>
    </div>
  );
}

export default TaskForm;
