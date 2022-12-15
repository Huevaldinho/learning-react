import TaskList from "./components/tasks/TaskList";
import TaskForm from "./components/tasks/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />

      </div>
    </main>
  );
}
export default App;
