import React, { useState } from 'react';

// Components

import Navbar from './components/Navbar';
import AsideDrawer from './components/AsideDrawer';
import HamburgerButton from './../../components/HamburgerButton';

// Data

import { navigationLinks } from './data';

// Styles

import './styles.scss';

// -----------------

const Header = () => {
  const [asideOpen, toggleAside] = useState(false);

  function handleToggleAside() {
    toggleAside(!asideOpen);
  }

  return (
    <div className="header">
      <div className="content-container header__container">
        <div className="header__logo">Bhromaon</div>

        <Navbar links={navigationLinks} />

        <HamburgerButton handleClick={handleToggleAside} isOpen={asideOpen} />
      </div>

      <AsideDrawer isOpen={asideOpen} links={navigationLinks} />
    </div>
  );
};

export default Header;
