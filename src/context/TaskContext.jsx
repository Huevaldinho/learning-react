import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //para manejar los estados de manera global en multiples componentes.

export function TaskContextProvider(props) {
  //engloba al resto de componentes
  //el state se utiliza para cambiar los datos en la gui sin tener que refrescar la pagina empleta
  //cada vez que se modifique tasks se va
  let [tasks, setTasks] = useState([]); //el estado por defecto lo declaramos vacio porque no ha cargado las tasks

  function createTask({ title, description }) {
    //[...] copia todos los elementos de tasks y le pega task.
    //setTasks agrega la nueva tarea tasks
    setTasks([...tasks, { title, id: tasks.length, description }]); //actualiza el estado de tasks
  }

  function deleteTask(id) {
    //filter borra la tarea con el id que entra como parametro.
    //una vez el filter devuelva el nuevo arreglo de tasks
    setTasks(tasks.filter((task) => task.id !== id)); //actualiza el state de tasks
  }
  function deleteAllTasks() {
    //funcion para eliminar todas las notas
    setTasks([]);
  }

  function editTask({ id, title, description }) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, description };
        }
        return task;
      })
    );
  }
  useEffect(() => {
    setTasks(data); // carga los datos que vienen de data
  }, []); //[] hace que renderice solo una vez

  //value tiene todo lo necesario para que los componentes hijos
  //puedan usar los datos y modificarlos
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        deleteAllTasks,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
export default TaskContext;
