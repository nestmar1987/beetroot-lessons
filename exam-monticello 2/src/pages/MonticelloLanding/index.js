import React from 'react';

// Components

import { SectionHero } from './components/SectionHero';
import { SectionNews } from './components/SectionNews';
import { ButtonUp } from '../../components/ButtonUp';
import { Header } from './components/Header';

// Styles

import './styles.scss';

// --------------------

export const MonticelloLanding = () => {
  return (
    <div className="landing">
      <Header />
      <SectionHero />
      <SectionNews />

      <div className="landing__button-up-wrapper">
        <ButtonUp />
      </div>
    </div>
  );
};
