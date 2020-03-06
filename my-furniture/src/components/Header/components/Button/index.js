import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Button = ({children, onClick, color, size }) => {
  // Modify styles

  const modify = classNames({
    [`button--color-${color}`]: color,
    [`button--size-${size}`]: size,
  });

  return (
    <button className={`button ${modify}`} onClick={onClick}>
      {children}
    </button>
  );
};

// ----------------

// Type of props

Button.propTypes = {
  children: types.node.isRequired,
  onClick: types.func.isRequired,
  color: types.oneOf(['secondary', 'primary']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg']),
};

// Default value for props

Button.defaultProps = {
  fluidWidth: false,
  color: 'primary',
  size: 'xs',
};
