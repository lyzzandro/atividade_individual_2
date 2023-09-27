import Task from "../task";
import "./styles.css";
import { useState } from "react";

export default function Tasks() {
  const [list, setList] = useState(["fsefssef", "gggggggggg", "fsefssef"]);

  function deleteTask(id) {
    const listaUpdate = list.filter((text, index) => id !== index);
    setList(listaUpdate);
  }

  return (
    <div className="tasks">
      {list.map((text, index) => {
        return <Task text={text} id={index} callbackDelete={deleteTask} />;
      })}
    </div>
  );
}
