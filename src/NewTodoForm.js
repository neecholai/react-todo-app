import React, { useState } from 'react';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const initialData = {
    todoText: ""
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
    addTodo(formData);
    setFormData(initialData);
  }

  return (
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <label className="NewTodoForm-label" htmlFor="todoText">Add Task: </label>
        <input
          name="todoText"
          onChange={handleChange}
          value={formData.todoText}
          id="todoText" />
        <button className='NewTodoForm-btn'>Submit</button>
      </form>
  );

}

export default NewTodoForm;