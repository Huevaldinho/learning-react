import Router from "./components/routes/Router";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <>
      <TaskContextProvider>
        {/*Create the router component*/}
        <Router />
      </TaskContextProvider>
    </>
  );
}
export default App;
