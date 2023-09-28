import Button from "../button";
import Input from "../input";
import "./styles.css";

export default function NewTasks({ text, setText, list, setList }) {
  return (
    <div className="new-tasks">
      <Input handleText={setText} setList={setList} />
      <Button text={text} list={list} setList={setList} />
    </div>
  );
}
