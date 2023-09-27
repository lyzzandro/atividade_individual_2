import Checkbox from "../checkbox";
import Delete from "../delete-btn";
import "./styles.css";

export default function Task({ text, id, callbackDelete }) {
  return (
    <div className="task">
      <Checkbox id={id} />
      <label>
        <p id={`text-${id}`}>{text}</p>
      </label>
      <Delete callback={callbackDelete} id={id} />
    </div>
  );
}
