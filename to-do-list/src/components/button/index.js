import "./styles.css";
import plus from "../../images/plus.svg";

export default function Button(text) {
  return (
    <button className="button" onClick={() => console.log(text)}>
      <h2>Criar</h2>
      <img src={plus} />
    </button>
  );
}
