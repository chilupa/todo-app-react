import React from "react";

const TodoItem = props => {
  return (
    <div>
      <p>
        <span>
          <input type="checkbox" />
        </span>
        {props.todo}
      </p>
    </div>
  );
};

export default TodoItem;
