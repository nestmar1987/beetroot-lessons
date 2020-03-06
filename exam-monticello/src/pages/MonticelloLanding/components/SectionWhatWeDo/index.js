import types from 'prop-types';
import React from 'react';
import { SectionTitle } from '../../../../components/SectionTitle';
import { ContentContainer } from '../../../../components/ContentContainer';
import { dataFirstProject, dataSecondProject } from './data';

import { FirstProject } from './components/FirstProject';
import { SecondProject } from './components/SecondProject';

import './styles.scss';

export const SectionWhatWeDo = () => {
  return (
    <section className="about">
      <ContentContainer maxWidth="1600">
        <div className="about__content">
          <SectionTitle
            className="about__title"
            fluidWidth
            color="secondary"
            title="What We Do"
          />
          <FirstProject data={dataFirstProject} />
          <SecondProject data={dataSecondProject} />
        </div>
        
      </ContentContainer>
    </section>
  );
};

// ----------------

// Type of props

SectionWhatWeDo.propTypes = {
  prop: types.string,
};

// Default value for props

SectionWhatWeDo.defaultProps = {};
