import React, { useState } from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import EditTodoForm from './EditTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);


  const addTodo = todoData => {
    const newTodo = { ...todoData, id: uuid(), editFormIsShown: false }
    setTodos(todos => (
      [...todos, newTodo]
    ));
  }

  const editTodo = todoData => {
    const updatedTodo = { ...todoData }
    setTodos(todos => (
      todos.map(todo => (updatedTodo.id === todo.id ? updatedTodo : todo))
    ));
  }

  const remove = id => {
    setTodos(todos => todos.filter(todo => {
      return todo.id !== id
    }));
  }

  const toggleEditForm = (todo) => {
    console.log(todo);
    const isShown = !todo.editFormIsShown;
    const updatedTodo = { ...todo, editFormIsShown: isShown }
    setTodos(todos => (
      todos.map(todo => (updatedTodo.id === todo.id ? updatedTodo : todo))
    ));
  }

  return (
    <div className='TodoList'>
      <NewTodoForm addTodo={addTodo} />
      <div className='TodoList'>
        {
          todos.map(todo => (
            <div className='TodoList-todo' key={todo.id}>
              <span className='TodoList-text'>
                {todo.todoText}
              </span>
              <button className='TodoList-button' onClick={evt => remove(todo.id)}>
                Delete
              </button>
              <button className='TodoList-button' onClick={evt => toggleEditForm(todo)}>
                Edit
              </button>
              {todo.editFormIsShown ? <EditTodoForm id={todo.id} editTodo={editTodo} todoText={todo.todoText} /> : console.log('NOTHING')}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TodoList;