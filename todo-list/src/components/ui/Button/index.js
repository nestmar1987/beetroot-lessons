import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Button = ({ fluidWidth, children, onClick, color, size }) => {
  // Modify styles

  const modify = classNames({
    [` button--color-${color}`]: color,
    [` button--size-${size}`]: size,
    ' button--fluid-width': fluidWidth,
  });

  // Render

  return (
    <button className={`button${modify}`} onClick={onClick}>
      {children}
    </button>
  );
};

// ----------------

// Type of props

Button.propTypes = {
  fluidWidth: types.bool,
  children: types.node.isRequired,
  onClick: types.func.isRequired,
  color: types.oneOf(['secondary', 'primary']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg']),
};

// Default value for props

Button.defaultProps = {
  fluidWidth: false,
  color: 'primary',
  size: 'md',
};
