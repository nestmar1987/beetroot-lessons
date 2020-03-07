import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../components/ContentContainer';
import { card } from './components/ProductCard/data.js';
import { Header } from '../../components/Header';
import { ProductCard } from '../HomePage/components/ProductCard';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';

import './styles.scss';

export const HomePage = () => {
  return (
    <section className="hero">
      <Header />
      <ContentContainer maxWidth="1470">
        <div className="hero__content">
          <div className="hero__title-image"></div>
          <div className="hero__card-wrapper">
            {card.map(({ title, price, modifyImage, linkRoutes }, id) => {
              return (
                <Link to={linkRoutes}>
                  {' '}
                  <ProductCard
                    title={title}
                    price={price}
                    modifyImage={modifyImage}
                    key={id}
                  />
                </Link>
              );
            })}
          </div>
          <Footer />
        </div>
      </ContentContainer>
    </section>
  );
};

// Type of props

HomePage.propTypes = {
  prop: types.string,
};

// Default value for props

HomePage.defaultProps = {};
