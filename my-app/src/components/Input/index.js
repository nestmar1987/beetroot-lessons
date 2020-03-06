import React from 'react';

import './styles.scss';

const Input = ({ placeholder }) => {
  return (
    <input
      className="simple-input"
      type="text"
      placeholder={placeholder || 'Search'}
    />
  );
};

export default Input;
