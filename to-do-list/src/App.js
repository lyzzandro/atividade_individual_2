import "./App.css";
import NewTasks from "./components/new-tasks";
import Tasks from "./components/tasks/index.";
import logo from "../src/images/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo do projeto" />
      <NewTasks />
      <Tasks />
    </div>
  );
}

export default App;
