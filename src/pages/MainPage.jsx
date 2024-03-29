import NavBar from "../components/navBar/navBar";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";

function MainPage() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <NavBar />
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default MainPage;
