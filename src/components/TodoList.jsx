import Todo from "./Todo";
import { useEffect, useState } from "react";

const TodoList = ({todos, deleteTodo, completeTodo}) => {
  return (
    <div className='my-3'>
      <ul className="list-group">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
