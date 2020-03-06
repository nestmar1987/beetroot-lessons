import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Modal = props => {
  // Modify styles

  const modify = classNames({
    ' name': props,
  });

  // Render

  return <div className={`name${modify}`} />;
};

// ----------------

// Type of props

Modal.propTypes = {
  prop: types.string,
};

// Default value for props

Modal.defaultProps = {};
