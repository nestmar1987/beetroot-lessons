import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const FontIcon = ({
  rotate180,
  iconColor,
  rotate45,
  rotate90,
  onClick,
  library,
  icon,
  size,
  style,
}) => {
  // Modify styles

  const modify = classNames({
    ' font-icon--rotate180': rotate180,
    [` font-icon--${size}`]: size,
    ' font-icon--rotate45': rotate45,
    ' font-icon--rotate90': rotate90,
    [` font-icon--color-${iconColor}`]: iconColor,
  });

  // Render

  return (
    <i
      className={`${library} font-icon${modify}`}
      style={style}
      onClick={onClick}
    >
      {icon}
    </i>
  );
};

// ----------------

// Type of props

FontIcon.propTypes = {
  iconColor: types.oneOf(['initial', 'green']),
  rotate180: types.bool,
  rotate45: types.bool,
  rotate90: types.bool,
  library: types.string.isRequired,
  onClick: types.func,
  icon: types.string.isRequired,
  size: types.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
    'xxxxl',
    'max',
  ]),
};

// Default value for props

FontIcon.defaultProps = {
  iconColor: 'initial',
  library: 'material-icons',
  size: 'md',
};
