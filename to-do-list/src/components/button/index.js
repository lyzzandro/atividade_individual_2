import "./styles.css";
import plus from "../../images/plus.svg";

export default function Button({ text, list, setList }) {
  return (
    <button
      className="button"
      onClick={() => {
        if (text != null && text != "") {
          setList([...list, text]);
          localStorage.setItem("list", JSON.stringify(list));
        }

        console.log(JSON.parse(localStorage.getItem("list")));
      }}
    >
      <h2>Criar</h2>
      <img src={plus} />
    </button>
  );
}
