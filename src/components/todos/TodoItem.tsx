import React, { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import { TodoInterface } from "../../interfaces/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: TodoInterface }> = (props) => {
  const todosCtx = useContext(TodosContext);
  const removeTodoHandler = (todoId: number) => {
    todosCtx.onDeleteTodo(todoId);
  }
  const formattedDate = new Date(props.todo.due).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <li className={classes.item} onClick={removeTodoHandler.bind(null, props.todo.id)}>
      {props.todo.description} - {formattedDate}
    </li>
  );
};

export default TodoItem;
