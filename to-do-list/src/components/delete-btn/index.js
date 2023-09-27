import "./styles.css";
import delete_btn from "../../images/delete.svg";

export default function Delete() {
  return (
    <button className="delete">
      <img src={delete_btn} alt="Ícone de lixeira" />
    </button>
  );
}
