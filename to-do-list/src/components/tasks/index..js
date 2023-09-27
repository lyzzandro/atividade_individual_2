import Info from "../info";
import Task from "../task";
import "./styles.css";

export default function Tasks() {
  return (
    <div className="tasks">
      <Info />
      <Task />
      <Task />
      <Task />
    </div>
  );
}
