import "./App.css";
import NewTasks from "./components/new-tasks";
import Tasks from "./components/tasks/index.";
import logo from "../src/images/logo.svg";
import { useState } from "react";

function App() {
  const [text, setText] = useState(null);
  const [list, setList] = useState([]);

  localStorage.setItem(list, )

  return (
    <div className="App">
      <img src={logo} alt="Logo do projeto" />
      <NewTasks text={text} setText={setText} list={list} setList={setList} />
      <Tasks list={list} setList={setList} />
    </div>
  );
}

export default App;
