import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../../../lib/firebase";
import * as css from "./styles.module.scss";

export const DeleteBtn = () => {
  // context
  const context = useContext(TodoContext);

  if (!context) return null;
  const { todoItems, setTodoItems } = context;

  return (
    <button
      className={todoItems.length !== 0 ? css.button : css.inActiveButton}
      onClick={async () => {
        // 完了済みのTodo取得
        const completedItems = todoItems.filter((todo) => todo.completed);
        // チェック済みtodoのみ削除
        for (const item of completedItems) {
          await deleteDoc(doc(db, "todo", item.id));
        }
        // contextに反映
        setTodoItems((prev) => prev.filter((todo) => !todo.completed));
      }}
    >
      削除
    </button>
  );
};
