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

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
        </h4>
        <button className="btn btn-primary m-2" onClick={this.changeStateData}>
          Change
        </button>
      </div>
    );
  }
}
