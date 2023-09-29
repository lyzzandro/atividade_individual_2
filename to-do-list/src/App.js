import "./App.css";
import NewTasks from "./components/new-tasks";
import Tasks from "./components/tasks/index.";
import logo from "../src/images/logo.svg";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    let localList = JSON.parse(localStorage.getItem("list"));
    console.log(localList);
    setList(localList ? localList : []);
  }, []);

  return (
    <div className="App">
      <img src={logo} alt="Logo do projeto" />
      <NewTasks text={text} setText={setText} list={list} setList={setList} />
      <Tasks list={list} setList={setList} />
    </div>
  );
}

export default App;
