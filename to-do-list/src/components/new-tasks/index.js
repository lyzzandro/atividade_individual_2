import Button from "../button";
import Input from "../input";
import "./styles.css";
import { useState } from "react";

export default function NewTasks() {
  const [text, setText] = useState(null);

  const updateText = (r) => {
    setText(r);
  };

  return (
    <div className="new-tasks">
      <Input handleText={updateText} />
      <Button text={text} />
    </div>
  );
}
