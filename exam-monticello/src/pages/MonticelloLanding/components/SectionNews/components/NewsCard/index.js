import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const NewsCard = ({
  handleClick,
  description,
  className,
  author,
  avatar,
  image,
  title,
  date,
  id,
}) => {
  // Modify styles

  const modify = classNames({
    // ' name': props,
  });

  // Render

  return (
    <div className={`news-card ${className}${modify}`}>
      <div className="news-card__inner">
        <div
          className="news-card__image img-cover"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="news-card__add-button"
            onClick={() => handleClick(id)}>
            <p></p>
            <p></p>
          </div>
        </div>

        <div className="news-card__data">
          <div className="news-card__title">{title}</div>
          <div className="news-card__description">{description}</div>
          <div className="news-card__subblock-wrap">
            <div className="news-card__avatar img-cover"
            style={{ backgroundImage: `url(${avatar})` }}>
            </div>
            <div className="news-card__info-author-wrap">
              <div className="news-card__author">{author}</div>
              <div className="news-card__date">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------

// Type of props

NewsCard.propTypes = {
  prop: types.string,
};

// Default value for props

NewsCard.defaultProps = {};
