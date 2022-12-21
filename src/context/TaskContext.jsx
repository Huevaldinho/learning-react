import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //para manejar los estados de manera global en multiples componentes.

export function TaskContextProvider(props) {
  //encapsulate the rest of the components
  let [tasks, setTasks] = useState([]); //initializate default state of tasks

  /**
   * Function to create a new task
   * @param title: Titulo de la tarea
   * @param description: Descripcion de la tarea
   */
  function createTask({ title, description }) {
    //[...] copie all the elements on tasks and add the new task
    setTasks([...tasks, { title, id: tasks.length, description }]); //setTasks updates the tasks with the new one
  }

  /**
   * Function to delete a task using the id
   * @param id: id of the task to delete
   */
  function deleteTask(id) {
    //filter borra la tarea con el id que entra como parametro.
    //una vez el filter devuelva el nuevo arreglo de tasks
    setTasks(tasks.filter((task) => task.id !== id)); //actualiza el state de tasks
  }
  /**
   * Function to delate all tasks
   */
  function deleteAllTasks() {
    setTasks([]); //updates tasks with an empty array
  }
  /**
   * Function to update a task.
   * @param id: id of the task to be updated.
   * @param title: New title to be updated.
   * @param description: New description to be updated.
   */
  function editTask({ id, title, description }) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, description }; //...task updates the title and description of the object (merge)
        }
        return task;
      })
    );
  }
  useEffect(() => {
    setTasks(data); // set the tasks coming from data
  }, []); //[] tells the useEffet to only execute once (when the component is created).

  //value has the values and functions that the children are going to be using
  //children use the data to display in the UI and the function to manipulate the state of the data.
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
