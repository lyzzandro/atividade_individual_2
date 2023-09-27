import "./styles.css";

export default function Checkbox({id}) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      onClick={() => {
        const element = document.querySelector(`#text-${id}`);
        console.log(element);
        element.classList.toggle("taskRiscada");
      }}
    ></input>
  );
}
