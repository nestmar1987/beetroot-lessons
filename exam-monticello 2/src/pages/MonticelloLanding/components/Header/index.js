import classNames from 'classnames';
import types from 'prop-types';
import React, { useState } from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { SocialBlock } from './components/SocialBlock';
import { Navbar } from './components/Navbar';
import { Logo } from '../../../../components/Logo';

import useCurrentPosition from '../../../../hooks/useCurrentPosition';

// Static

import { navigationLinks, socialLinks } from './data';

// Assets

import logo from '../../../../assets/icons/Logo.svg';

// Styles

import './styles.scss';
import AsideDrawer from './components/AsideDrawer';
import HamburgerButton from './components/HamburgerButton';

// ----------------

export const Header = props => {
  const [isAsideOpen, toggleAside] = useState(false);

  const currentPosition = useCurrentPosition();

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  // Modify styles

  const modify = classNames({
    ' header--on-scroll': currentPosition >= 1,
  });

  // Render

  return (
    <div className={`header${modify}`}>
      <ContentContainer>
        <div className="header__content">
          <Logo maxWidth="254" svg={logo} />
          <Navbar activeItem="Contacts" links={navigationLinks} />
          <div className="header__right-block">
            <SocialBlock links={socialLinks} />
            <HamburgerButton
              handleClick={handleToggleAside}
              className="header__menu-btn-wrapper"
              isOpen={isAsideOpen}
            />
          </div>
          <AsideDrawer isOpen={isAsideOpen} links={navigationLinks} />
        </div>
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

Header.propTypes = {
  prop: types.string,
};

// Default value for props

Header.defaultProps = {};
