import React from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";
import Aux from "../hoc/Aux";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [
        { name: "Buy groceries", done: false },
        { name: "Pay rent", done: false },
        { name: "Take tablets", done: false }
      ]
    };
  }

  handleSave = todo => {
    // Slice will copy all the elements from an array and generates a new array
    // Spread operation does the same thing as slice()
    // let newCopiedArray = this.state.todos.slice();
    let newCopiedArray = [...this.state.todos];
    newCopiedArray.push({ name: this.state.todo, done: false });
    this.setState({ todos: newCopiedArray });
  };

  // Sent this function as a prop to 'Input' component
  handleTodoChange = event => {
    this.setState({ todo: event.target.value });
  };

  render() {
    return (
      <Aux>
        <h2>Never miss a thing!</h2>
        <Input changed={this.handleTodoChange} />
        <button onClick={() => this.handleSave(this.state.todo)}>Save</button>
        <hr />
        <h2>Your To-Dos</h2>
        {/* ngFor in Angular ; In React, we use map() */}

        {/* use slice() for copying the elements from original array 
        to the array you want to set else use spread operator */}

        {/* Todos */}
        {this.state.todos.map((todo, index) => (
          <div key={todo.name}>
            <TodoItem todo={todo.name} checked={todo.done} />
          </div>
        ))}
      </Aux>
    );
  }
}
