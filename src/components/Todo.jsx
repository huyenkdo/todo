const Todo = ({todo, deleteTodo, completeTodo}) => {
  return (
    <li className="list-group-item">
      <input className="form-check-input me-1" type="checkbox" defaultChecked={todo.completed} id="firstCheckbox" onClick={() => completeTodo(todo.id)} />
      <label className="form-check-label ps-2" htmlFor="firstCheckbox">{todo.title} : {todo.description}</label>
      <button type="button" className="btn-close" aria-label="Close" onClick={() => deleteTodo(todo.id)} ></button>
    </li>
  )
}

export default Todo;
