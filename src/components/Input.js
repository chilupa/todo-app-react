import React from 'react';
import '../styles/Todo.scss';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <div>
      <input
        className="InputComponent"
        placeholder="Please enter your todo"
        type="text"
        onChange={props.changed}
      />
    </div>
  );
};

Input.propTypes = {
  changed: PropTypes.func
};

export default Input;
