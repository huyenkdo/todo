import React,{ useContext } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodosContext from "../contexts/todos_context";

function LandingPage() {
  const { todos, setTodos } = useContext(TodosContext);

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length ? (todos[todos.length - 1].id) + 1 : 1,
      completed: false,
      ...todo
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const deleteTodo = (id) => {
    const changedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(changedTodos);
  };

  const completeTodo = (id) => {
    const changedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true
      }
      return todo
    });

    setTodos(changedTodos);
  };

  return (
    <div className='container my-4'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
    </div>
)
}

export default LandingPage;
