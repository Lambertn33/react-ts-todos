import React, { useState } from "react";
import { TodoInterface, TodoContextInterface } from "../interfaces/Todo";

export const TodosContext = React.createContext<TodoContextInterface>({
  todos: [],
  onAddTodo: (todo: TodoInterface) => {},
  onDeleteTodo: (id: number) => {},
});

const TodoContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Array<TodoInterface>>([]);

  const addTodoHandler = (todo: TodoInterface) => {
    setTodos((prevState) => {
      return [...prevState, todo];
    });
  };

  const deleteTodoHandler = (todoId: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const todosContext: TodoContextInterface = {
    todos,
    onAddTodo: addTodoHandler,
    onDeleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={todosContext}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
