import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ memo, useState, useMemo, useEffect, useRef } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialTodos = [
  {
    id: 1,
    title: "Do homework",
    description: "Read 40 pages from the book",
    completed: false,
  },
  {
    id: 2,
    title: "Review useState and use Effectt",
    description: "They're the most-used React hooks, so would be good to review them.",
    completed: true,
  },
];

function App() {
  const [ todos, setTodos] = useState(initialTodos);

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

export default App;
