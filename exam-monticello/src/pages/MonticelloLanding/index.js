import React from 'react';

// Components

import { SectionHero } from './components/SectionHero';
import { SectionNews } from './components/SectionNews';
import { Header } from './components/Header';
import { SectionWhatWeDo } from './components/SectionWhatWeDo';
import { SectionGallery } from './components/SectionGallery';
import { SectionContacts } from './components/SectionContacts';

// Styles

import './styles.scss';

// --------------------

export const MonticelloLanding = () => {
  return (
    <div className="landing">
      <Header />
      <SectionHero />
      <SectionWhatWeDo />
      <SectionNews />
      <SectionGallery />
      <SectionContacts />
    </div>
  );
};
