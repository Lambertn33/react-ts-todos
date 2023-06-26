import TodoContextProvider from './store/todos-context';
import './App.css';
import Todos from './components/todos/Todos';
import NewTodo from './components/todos/NewTodo';

function App() {
  return <TodoContextProvider>
    <Todos />
    <NewTodo />
  </TodoContextProvider>
}

export default App;
