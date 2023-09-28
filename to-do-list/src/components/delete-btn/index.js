import "./styles.css";
import delete_btn from "../../images/delete.svg";

export default function Delete({ id, callback }) {
  return (
    <button className="delete" onClick={() => callback(id)}>
      <img src={delete_btn} alt="Ícone de lixeira" />
    </button>
  );
}
