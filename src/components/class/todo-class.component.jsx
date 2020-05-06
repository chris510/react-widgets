import React from 'react';

class TodoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todoItem: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, this.state.todoItem],
      todoItem: ''
    })
  }

  handleChange(e) {
    this.setState({
      todoItem: e.target.value
    })
  }

  render() {
    const { todoList, todoItem } = this.state;
    return (
      <div className="todo-container">
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={todoItem}
            placeholder=""
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        {todoList.map((todoItem, idx) => (
          <div className="todo-item" key={idx}>{todoItem}</div>
        ))}
      </div>
    )
  }
}

export default TodoClass;