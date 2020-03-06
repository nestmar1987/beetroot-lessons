import types from 'prop-types';
import React from 'react';


// Styles

import './styles.scss';


// ----------------

export const Navbar = ({links}) => {

  return (
    <div className="navbar">
      {links.map(({label}, index) => {
        return (
          <div className="navbar__item" key={index}>
        {label}
          </div>
        );
      })}
    </div>
  );
};


// ----------------

// Type of props

Navbar.propTypes = {
  prop: types.string,
};

// Default value for props

Navbar.defaultProps = {};
