import React from 'react';

import './styles.scss';

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map(({ label, link }, index) => {
        return (
          <a className="navbar__item" key={index} href={link}>
            {label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
