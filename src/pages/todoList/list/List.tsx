import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import styles from "./styles.module.scss";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../../lib/firebase";


export const List = () => {
  // context
  const context = useContext(TodoContext);

  if (!context) return null;
  const { todoItems, setTodoItems } = context;

  const [ checked, setChecked  ] = useState(false)


  return (
    <>
    <ul>
      {todoItems.map(
        (item, index) =>
          // !item.completed && (
            <li className={styles.list} key={index}>
              <input
              type="checkbox"
              checked={item.completed}
              className={styles.check}
              onChange={(e) => {
                const newComleted = e.target.checked
                setTodoItems(prev => prev.map((todo, i) =>
                i === index ? {...todo, completed:newComleted} : todo))
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
