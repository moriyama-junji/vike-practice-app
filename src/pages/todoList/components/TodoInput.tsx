import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import styles from "./styles.module.scss";

const TodoInput = () => {
  const context = useContext(TodoContext);

  if (!context) return null; 
  const { todoItems, setTodoItems } = context;

  const [inputText, setInputText] = useState("");

  return (
    <div className={styles.add_todo}>
      <input 
      className={styles.inputText}
      type="text" onChange={(e) => setInputText(e.target.value)} />
      <button
        className={styles.add_button}
        onClick={() => {
          setTodoItems((prev) => [
            ...prev,
            { content: inputText, completed: false },
          ]);
          // setInputText("");
        }}
      >
        追加
      </button>
    </div>
  );
};

export default TodoInput;
