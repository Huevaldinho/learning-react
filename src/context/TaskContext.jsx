import { createContext, useState,useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //almacena los datos y estados

export function TaskContextProvider(props) {
  //engloba al resto de componentes

  //el state es para que se actualice en la gui
  let [tasks, setTasks] = useState([]); //el estado por defecto lo declaramos vacio porque no ha cargado las tasks

  function createTask({ title, description }) {
    //[...] copia todos los elementos de tasks y le pega task.
    //setTasks agrega la nueva tarea al stado de tasks
    setTasks([...tasks, { title, id: tasks.length, description }]);
  }

  function deleteTask(id) {
    //filter borra la tarea con el id que entra como parametro.
    //una vez el filter devuelva el nuevo arreglo de tasks,
    //se actualiza el state de las tasks
    setTasks(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    /*
      Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez,
       y después cada vez que el componente se actualice.
    */
    setTasks(data); //cuando se renderiza por primera vez, carga los datos que vienen de data
  }, []); //[] significa que apenas esta renderizando por primera vez

  //value tiene todo lo necesario para que los componentes hijos
  //puedan usar los datos y modificarlos
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
export default TaskContext;
