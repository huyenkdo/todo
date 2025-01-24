import { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const initialFormValue = {
    title: "",
    description: "",
  };
  const [ formValue, setFormValue ] = useState(initialFormValue)
  const { title, description } = formValue;

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(changedFormValues);
  };

  const handleSubmit = (e) => {
    addTodo(formValue);
    e.preventDefault();
    setFormValue(initialFormValue);
  };

  return (
    <div>
      <h1>Add New To-Do</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input name="title" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea name="description" className="form-control" id="description" aria-describedby="emailHelp" value={description} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  )
}

export default TodoForm;
