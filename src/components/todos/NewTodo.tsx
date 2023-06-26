import React, { useContext, useRef } from "react";
import { TodosContext } from "../../store/todos-context";
import classes from "./NewTodo.module.css";
import { TodoInterface } from "../../interfaces/Todo";

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      descriptionRef.current?.value.trim().length === 0 ||
      dueDateRef.current?.value.trim().length === 0
    ) {
      alert("please fill all fields");
      return;
    }

    const newTodo: TodoInterface = {
      id: Math.floor(Math.random() * 500) + 1,
      description: descriptionRef.current!.value,
      due: new Date(dueDateRef.current!.value),
    };
    todosCtx.onAddTodo(newTodo);
  };
  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor="description">Todo Title</label>
      <input type="text" id="description" ref={descriptionRef} />
      <label htmlFor="date">Due date</label>
      <input type="date" id="date" ref={dueDateRef} />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default NewTodo;
