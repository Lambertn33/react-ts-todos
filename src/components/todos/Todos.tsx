import React, { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import classes from "./Todos.module.css";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <>
      <h3>Todos List</h3>
      {todosCtx.todos.length === 0 ? (
        <p className={classes.empty}>No Current Todos</p>
      ) : (
        <ul className={classes.todos}>
          {todosCtx.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Todos;
