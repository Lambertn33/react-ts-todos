export interface TodoInterface {
  id: number;
  description: string;
  due: Date;
}

export interface TodoContextInterface {
  todos: Array<TodoInterface>;
  onAddTodo: (newTodo: TodoInterface) => void;
  onDeleteTodo: (todoId: number) => void;
}
