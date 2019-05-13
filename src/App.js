import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {
  //1 step
  constructor(props) {
    super(props);
    this.state = {
      userName: "Dilshod",
      todoItems: [
        { action: "Write a code", done: false },
        { action: "Read a book", done: false },
        { action: "Watch TV", done: true },
        { action: "Create React App", done: false }
      ],
      newItemText: ""
    };
  }

  updateNewtextValue = e => {
    this.setState({ newItemText: e.target.value });
  };

  //2 step
  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.action === this.state.newItemText)
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false }
        ]
      });
    }
  };

  toggleTodo = todo =>
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });

  todoTableRows = () =>
    this.state.todoItems.map(item => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleTodo(item)}
          />
        </td>
      </tr>
    ));

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List (
          {this.state.todoItems.filter(t => !t.done).length} items to do)
        </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input
              className="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewtextValue}
            />
            <button
              className="btn btn-primary mt-1"
              onClick={this.createNewTodo}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
