import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';

// Styles

import './styles.scss';

// ----------------

export const SectionHero = props => {
  // Render

  return (
    <section className="hero">
      <ContentContainer maxWidth="1600">
        <div className="hero__content">Content</div>
      </ContentContainer>
    </section>
  );
};

// ----------------

// Type of props

SectionHero.propTypes = {
  prop: types.string,
};

// Default value for props

SectionHero.defaultProps = {};
