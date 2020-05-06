import React, { useState } from 'react';
import './todo-hooks.styles.scss';

const TodoHook = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  const handleChange = (e) => {
    console.log(e.target);

    setTodoItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todoItem]);
    setTodoItem('');
    console.log(todoList);
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoItem}
          placeholder=""
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todoList.map((todoItem, idx) => (
        <div className="todo-item" key={idx}>{todoItem}</div>
      ))}
    </div>
  )
}

export default TodoHook;