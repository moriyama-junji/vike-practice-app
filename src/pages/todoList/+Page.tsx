import React, { useContext, useState } from 'react'
import { TodoContext, TodoProvider } from './context/TodoContext'
import TodoInput from './components/TodoInput';
import { List } from './list/List';
import styles from "./styles.module.scss";


const TodoList = () => {

  return (
    <TodoProvider>
      <h1 className={styles.todo_main}>TODO LIST</h1>
      <TodoInput />
      <List />
    </TodoProvider>
  )
}

export default TodoList