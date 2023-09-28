import "./styles.css";
import plus from "../../images/plus.svg";

export default function Button({ text, list, setList }) {
  return (
    <button
      className="button"
      onClick={() => {
        setList([...list, text]);

        console.log(list);
      }}
    >
      <h2>Criar</h2>
      <img src={plus} />
    </button>
  );
}
