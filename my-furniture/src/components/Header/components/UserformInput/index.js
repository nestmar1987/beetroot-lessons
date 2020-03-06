import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const UserformInput = ({
  changeHandler,
  placeholder,
  value,
  name,
  type,
}) => {

  return (
    <div className="userform__wrapper">
    <input
      placeholder={placeholder}
      className="userform"
      onChange={changeHandler}
      value={value}
      type={type}
      autoComplete="none"
    />
    </div>
  );
};

// ----------------

// Type of props

UserformInput.propTypes = {
  changeHandler: types.func.isRequired,
  placeholder: types.string,
  value: types.string.isRequired,
  name: types.string.isRequired,
};

// Default value for props

UserformInput.defaultProps = {
  placeholder: 'Enter',
  value: '',
  type: 'text',
};
