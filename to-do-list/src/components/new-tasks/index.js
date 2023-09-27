import Button from "../button";
import Input from "../input";
import "./styles.css";
import { useState } from "react";

export default function NewTasks() {
  const [text, setText] = useState(null);

  return (
    <div className="new-tasks">
      <Input handleText={setText} />
      <Button text={text} />
    </div>
  );
}
