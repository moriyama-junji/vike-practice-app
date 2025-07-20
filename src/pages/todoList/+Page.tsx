import React, { useContext, useState } from 'react'
import { TodoContext, TodoProvider } from './context/TodoContext'
import TodoInput from './components/TodoInput';
import { List } from './list/List';


const TodoList = () => {

  return (
    <TodoProvider>
      <TodoInput />
      <List />
    </TodoProvider>
  )
}

export default TodoList