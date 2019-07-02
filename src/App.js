import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        item: "buy some milk"
      },
      {
        id: 2,
        item: "do laundry"
      }
    ]
  }

  handleDelete = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos
    })

  }

  addTodo = (todo) => {
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    const id = this.state.todos.length;

    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} handleDelete={this.handleDelete} />
        <AddTodo id={id} addTodo={this.addTodo} />
      </div>
    );
  }

}

export default App;
