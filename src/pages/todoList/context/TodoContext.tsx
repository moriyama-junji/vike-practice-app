import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";

// fireStore
import db from "../../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

// todoリストの型
type TodoProps = {
  id: string;
  content: string;
  completed: boolean;
};
// todoContextの型
type TodoContextType = {
  todoItems: TodoProps[];
  setTodoItems: Dispatch<SetStateAction<TodoProps[]>>;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoItems, setTodoItems] = useState<TodoProps[]>([]);

  useEffect(() => {
    // data取得
    const todoData = collection(db, "todo");
    getDocs(todoData).then((snapshot) => {
      const todos = snapshot.docs.map((doc) => doc.data() as TodoProps);
      // contextに反映
      setTodoItems(todos);
    });
  }, []);

  return (
    <TodoContext.Provider value={{ todoItems, setTodoItems }}>
      {children}
    </TodoContext.Provider>
  );
};
