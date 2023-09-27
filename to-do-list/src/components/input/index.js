import "./styles.css";

export default function Input(props) {
  return (
    <input
      type="text"
      className="input"
      placeholder="Adicione uma nova tarefa"
      onChange={(e) => {
        props.handleText(e.target.value);
      }}
    ></input>
  );
}
