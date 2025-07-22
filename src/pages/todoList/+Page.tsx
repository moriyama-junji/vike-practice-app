
import { TodoProvider } from "./context/TodoContext";
import { List } from "./list/List";
import * as css from "./styles.module.scss";
import { DeleteBtn } from "./components/deleteBtn/DeleteBtn";
import TodoInput from "./components/input/TodoInput";

const TodoList = () => {

  return (
    <TodoProvider>
      <h1 className={css.todoMain}>TODO LIST</h1>
      <TodoInput />
      <List />
      <DeleteBtn />
    </TodoProvider>
  );
};

export default TodoList;
