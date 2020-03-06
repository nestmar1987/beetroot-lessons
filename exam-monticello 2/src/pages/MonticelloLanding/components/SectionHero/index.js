import types from 'prop-types';
import React, { useState } from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { HelloHeroModal } from './components/HelloHeroModal';

// Styles

import './styles.scss';

// ----------------

export const SectionHero = props => {
  const [modalIsOpen, toggleModal] = useState(false);

  const toggleModalHandler = () => {
    toggleModal(!modalIsOpen);

    console.log('111');
  };

  // Render

  return (
    <>
      <div className="hero">
        <ContentContainer maxWidth="1600">
          <div className="hero__content">
            Content
            <button onClick={() => toggleModalHandler()}>Modal Button</button>
          </div>
        </ContentContainer>
      </div>

      <HelloHeroModal isOpen={modalIsOpen} onClose={toggleModalHandler} />
    </>
  );
};

// ----------------

// Type of props

SectionHero.propTypes = {
  prop: types.string,
};

// Default value for props

SectionHero.defaultProps = {};
