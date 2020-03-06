import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';
import { card } from './data';

// ----------------

export const ProductCard = ({ title, price, modifyImage }) => {
  return (
    <div className="product-card">
      <div className="product-card__inner">
        <div
          className={`product-card__image-${modifyImage}`}
        ></div>
        <div className="product-card__info">
          <div className="product-card__title">{title}</div>
          <div className="product-card__price">{price}</div>
        </div>
      </div>
    </div>
  );
};

// ----------------

// Type of props

ProductCard.propTypes = {
  prop: types.string,
};

// Default value for props

ProductCard.defaultProps = {};
