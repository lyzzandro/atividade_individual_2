import Task from "../task";
import "./styles.css";


export default function Tasks({ list, setList }) {
  function deleteTask(id) {
    const listaUpdate = list.filter((text, index) => id !== index);
    setList(listaUpdate);
    localStorage.setItem("list", JSON.stringify(list));
  }

  return (
    <div className="tasks">
      {list.map((text, index) => {
        return <Task text={text} id={index} callbackDelete={deleteTask} />;
      })}
    </div>
  );
}
