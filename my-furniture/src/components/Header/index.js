import types from 'prop-types';
import React, { useState } from 'react';

// Components

import { ContentContainer } from '../ContentContainer';
import { Navbar } from './components/Navbar';
import { UserformInput } from './components/UserformInput';
import { Button } from './components/Button';

// Static

import { navigationLinks } from './data.js';

// Styles

import './styles.scss';
import AsideDrawer from './components/AsideDrawer';
import HamburgerButton from './components/HamburgerButton';

// ----------------

export const Header = props => {
  const [isAsideOpen, toggleAside] = useState(false);

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  const [inputValues, setInputValue] = useState({
    password: '',
    email: '',
  });

  const changeHandler = (name, value) => {
    setInputValue(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <header className="header">
      <ContentContainer>
        <div className="header__content">
          <div className="header__top-block">
          <UserformInput
                changeHandler={({ target: { value } }) =>
                  changeHandler('email', value)
                }
                placeholder="email"
                value={inputValues.email}
                name="email"
                type="email"
              />
              <UserformInput
                changeHandler={({ target: { value } }) =>
                  changeHandler('password', value)
                }
                placeholder="password"
                value={inputValues.password}
                name="password"
                type="password"
              />
              <Button color="primary" size="xs"> Login </Button>
          </div>
          <div className="header__title">
            <div className="header__title-block">
              <div>Best</div>
              <div>Furniture</div>
            </div>
            <HamburgerButton
                handleClick={handleToggleAside}
                className="header__menu-btn-wrapper"
                isOpen={isAsideOpen}
              />
          </div>
          <Navbar links={navigationLinks} />
          <AsideDrawer isOpen={isAsideOpen} links={navigationLinks} />
        </div>
      </ContentContainer>
    </header>
  );
};

// ----------------

// Type of props

Header.propTypes = {
  prop: types.string,
};

// Default value for props

Header.defaultProps = {};
