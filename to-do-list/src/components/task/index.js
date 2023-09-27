import Checkbox from "../checkbox";
import Delete from "../delete-btn";
import "./styles.css";

export default function Task() {
  return (
    <div className="task">
      <Checkbox />
      <label for="task1">
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </label>
      <Delete />
    </div>
  );
}
