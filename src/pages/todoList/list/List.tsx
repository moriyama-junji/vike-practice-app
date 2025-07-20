import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import styles from "./styles.module.scss";

export const List = () => {
  // context
  const context = useContext(TodoContext);

  if (!context) return null;
  const { todoItems, setTodoItems } = context;

  // チェックボックス
  const [checked, setChecked] = useState(false);

    return (
   <ul>
  {todoItems.map((item, index) => (
    !item.completed && (
      <li className={styles.list} key={index}>
        <p>{item.content}</p>
        <button
          className={styles.button}
          onClick={() => {
            setTodoItems(prev => prev.map((todo, i) => i === index ? { ...todo, completed: true } : todo))
          }}
        >完了</button>
      </li>
    )
  ))}
</ul>

  );
};


//  setTodoItems(prev =>
//               prev.map((todo, i) =>
//                 i === index ? { ...todo, completed: true } : todo
//               )
//             );