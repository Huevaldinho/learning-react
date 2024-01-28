import Router from "./routes/Router";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Router />
      </TaskContextProvider>
    </>
  );
}
export default App;
