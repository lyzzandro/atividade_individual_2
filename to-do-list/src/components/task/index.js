import Checkbox from "../checkbox";
import Delete from "../delete-btn";
import "./styles.css";

export default function Task({ text, id, callbackDelete }) {
  return (
    <div className="task">
      <div>
        <Checkbox id={id} />
        <label>
          <p id={`text-${id}`}>{text}</p>
        </label>
      </div>

      <Delete callback={callbackDelete} id={id} className="delete" />
    </div>
  );
}
