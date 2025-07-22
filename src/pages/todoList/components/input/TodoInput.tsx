import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import  * as css  from "./styles.module.scss";
import { addDoc, collection, DocumentReference } from "firebase/firestore";
import db from "../../../../lib/firebase";

const TodoInput = () => {
  const context = useContext(TodoContext);

  if (!context) return null;
  const { todoItems, setTodoItems } = context;

  const [inputText, setInputText] = useState("");

  return (
    <div className={css.addTodo}>
      <input
        className={css.inputText}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className={`${css.addButton} ${inputText.trim() !== "" ? css.isActive : ""}`}
        disabled={inputText.trim() === ""}
        onClick={async () => {
          try {
            // Firestoreに1回だけ保存
            const docRef = await addDoc(collection(db, "todo"), {
              content: inputText,
              completed: false,
            });

            // FirestoreのIDを含めてcontextに保存
            const newTodo = {
              id: docRef.id,
              content: inputText,
              completed: false,
            };

            setTodoItems((prev) => [...prev, newTodo]);
            setInputText("");
          } catch (error) {
            console.error("Firestoreへの保存に失敗:", error);
          }
        }}
      >
        追加
      </button>
    </div>
  );
};

export default TodoInput;
