import React, { useState } from 'react';
import './NewTodoForm.css';

function EditTodoForm({ isShown, id, editTodo, todoText}) {

  const initialData = {
    todoText,
    id
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    editTodo(formData);
    setFormData(initialData);
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label className="NewTodoForm-label" htmlFor="todoText">Edit Task: </label>
      <input
        name="todoText"
        onChange={handleChange}
        value={formData.todoText}
        id="todoText" />
        <button className='NewTodoForm-btn'>Update</button>
    </form>
  );

}

export default EditTodoForm;