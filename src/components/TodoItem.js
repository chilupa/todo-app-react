import React from 'react';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
  todo: PropTypes.string
};

export default TodoItem;
