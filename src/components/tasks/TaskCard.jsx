import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import save_btn_icon from '../../assets/save_btn_icon.svg'
import delete_btn_icon from '../../assets/delete_btn_icon.svg'


function TaskCard({ task }){
  /**
   * @param tasks: {title:value,description:value,id:value}
   */
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { deleteTask, editTask, tasks } = useContext(TaskContext); //To delete, update and rerender the tasks.
  const handleEditButton = (e) => {
    //!handleEditButton error, does not update on the first click, does update on double click.
    e.preventDefault();
    console.log("Task: ",task)
    console.log("Title and descripcion: ",title,description)
    editTask({
      id: task.id,
      title,
      description,
    });
    console.log(tasks)
  };
  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description)
  }, [])
  

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h1
        className="text-xl font-bold capitalize rounded-md p-1 text-center"
        value={task.title}
        onBlur={(e) => {
          setTitle(e.currentTarget.textContent);
        }}
        contentEditable
        suppressContentEditableWarning={true}
      >
        {task.title}
      </h1>
      <p
        className="text-white text-sm rounded-md m-2 p-1"
        value={task.description}
        onBlur={(e) => {
          setDescription(e.currentTarget.textContent);
        }}
        contentEditable
        suppressContentEditableWarning={true}
      >
        {task.description}
      </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        <img src={delete_btn_icon} alt="Editar" className="w-5 h-5" />
      </button>
      <button
        className="text-white font-bold capitalize bg-blue-800 hover:bg-gray-600 p-2 m-2 rounded-md text-left"
        onClick={handleEditButton}
      >
        <img src={save_btn_icon} alt="Editar" className="w-5 h-5" />
      </button>
    </div>
  );
}
export default TaskCard;
