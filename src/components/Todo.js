import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Button from '@material-ui/core/Button';
import Aux from '../hoc/Aux';
import '../styles/Todo.scss';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    { name: 'Buy groceries', done: false },
    { name: 'Pay rent', done: false },
    { name: 'Take tablets', done: false }
  ]);

  // Sent this function as a prop to 'Input' component
  const handleTodoChange = event => setTodo(event.target.value);

  const handleSave = todo => {
    // Slice will copy all the elements from an array and generates a new array
    // Spread operation does the same thing as slice()
    // let newCopiedArray =  todos.slice();
    let newCopiedArray = [...todos];
    newCopiedArray.push({ name: todo, done: false });
    setTodos(newCopiedArray);
  };

  return (
    <Aux>
      <div className="Wrapper">
        <h2>Never miss a thing!</h2>
        <div>
          <Input changed={handleTodoChange} />
          {todo.length === 0 ? (
            ''
          ) : (
            <div>
              <Button className="SaveButton" onClick={() => handleSave(todo)}>
                Save
              </Button>
            </div>
          )}
        </div>
        <h2>Your To-Dos</h2>

        {/* ngFor in Angular ; In React, we use map() */}

        {/* use slice() for copying the elements from original array 
        to the array you want to set else use spread operator */}

        {/* Todos */}
        <div>
          {todos.map((todo, index) => (
            <div key={index}>
              <TodoItem todo={todo.name} checked={todo.done} />
            </div>
          ))}
        </div>
      </div>
    </Aux>
  );
};

export default Todo;
