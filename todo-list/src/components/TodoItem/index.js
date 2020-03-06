import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Components

import { FontIcon } from '../FontIcon';
import { Button } from '../ui/Button';

// Styles

import './styles.scss';

// ----------------

export const TodoItem = ({
  removeHandler,
  createdDate,
  complete,
  name,
  id,
}) => {
  // Modify styles

  const modify = classNames({
    ' todo-item--complete': complete,
  });

  // Render

  return (
    <div className="todo-item">
      <div className="todo-item__additional-info">
        <p>{`Created date: ${createdDate}`}</p>
      </div>
      <div className={`todo-item__block${modify}`}>
        <p className="todo-item__name">{name}</p>

        <Button color="secondary" size="xs" onClick={() => removeHandler(id)}>
          <FontIcon icon="delete" />
        </Button>
      </div>
    </div>
  );
};

// ----------------

// Type of props

TodoItem.propTypes = {
  removeHandler: types.func.isRequired,
  complete: types.bool,
  name: types.string.isRequired,
  id: types.oneOfType([types.string, types.number]).isRequired,
};

// Default value for props

TodoItem.defaultProps = {
  complete: false,
};
