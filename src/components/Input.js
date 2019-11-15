import React from "react";

const Input = props => {
  return (
    <div>
      <input
        style={{ width: "50%" }}
        placeholder="Please enter your todo"
        type="text"
        onChange={props.changed}
      />
    </div>
  );
};

export default Input;
