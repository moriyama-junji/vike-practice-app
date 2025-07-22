import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import * as css from "./styles.module.scss";

export const List = () => {
  // context
  const context = useContext(TodoContext);

  if (!context) return null;
  const { todoItems, setTodoItems } = context;

  // const [ checked, setChecked  ] = useState(false)


  return (
    <>
    <ul>
      {todoItems.map(
        (item, index) =>
          // !item.completed && (
            <li className={css.list} key={index}>
              <input
              type="checkbox"
              checked={item.completed}
              className={css.check}
              onChange={(e) => {
                const newCompleted = e.target.checked
                setTodoItems(prev => prev.map((todo, i) =>
                i === index ? {...todo, completed:newCompleted} : todo))
              }}
              />
              <p>{item.content}</p>
              {/* 該当のitemのみ削除 */}
              {/* <button
                className={styles.button}
                onClick={async() => {
                  setTodoItems((prev) =>
                    prev.map((todo, i) =>
                      i === index ? { ...todo, completed: true } : todo
                    )
                  );
                  await deleteDoc(doc(db, "todo", item.id))
                }}
              >
                完了
              </button> */}
            </li>
          // )
      )}
    </ul>
    <ul>

    </ul>
    </>
  );
};
