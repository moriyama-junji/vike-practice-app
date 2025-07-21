
import { TodoContext, TodoProvider } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import { List } from "./list/List";
import styles from "./styles.module.scss";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../lib/firebase";
import { DeleteBtn } from "./components/deleteBtn/DeleteBtn";

const TodoList = () => {
 

  return (
    <>
    {/* <h1 className={styles.todo_main}>TODO LIST</h1> */}
    <TodoProvider>
      <h1 className={styles.todo_main}>TODO LIST</h1>
      <TodoInput />
      <List />
      <DeleteBtn />
    </TodoProvider>
    </>
  );
};

export default TodoList;
