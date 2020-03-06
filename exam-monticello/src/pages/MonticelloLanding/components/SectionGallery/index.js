import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import { SectionTitle } from '../../../../components/SectionTitle';
import { ContentContainer } from '../../../../components/ContentContainer';
import Button from '../../../../components/Button';
import {Images} from '../SectionGallery/components/Images';
import {imageGallery} from './data';

// Styles

import './styles.scss';


export const SectionGallery = () => {
  return (
  <section className="gallery">
  <ContentContainer maxWidth="1600">
    <div className="gallery__content">
      <SectionTitle
        className="gallery__title"
        fluidWidth
        color="secondary"
        title="Gallery"/>
      <Images images={imageGallery} />
      <Button withBorder borderColor largeSize>See More </Button>
    </div>
    
  </ContentContainer>
</section>);
};



// Type of props

SectionGallery.propTypes = {
  prop: types.string,
};

// Default value for props

SectionGallery.defaultProps = {};
