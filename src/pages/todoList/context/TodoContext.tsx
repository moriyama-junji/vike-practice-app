import React, { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

// todoリストの型
type TodoProps = {
  content: string,
  completed: boolean
}
// todoContextの型
type TodoContextType = {
  todoItems: TodoProps[],
  setTodoItems: Dispatch<SetStateAction<TodoProps[]>>
}

export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider = ({children}: {children: React.ReactNode}) => {

  const [todoItems, setTodoItems] = useState<TodoProps[]>([]);
  
  return (
    <TodoContext.Provider value={{todoItems, setTodoItems}}>{children}</TodoContext.Provider>
  )
}



// const addItems = ({content, completed}: TodoProps) => {
//   setTodoItems(prev => [
//     ...prev,
//     {content, completed}
//   ])
// }