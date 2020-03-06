import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { CustomSlider } from '../../../../components/CustomSlider';
import { SectionTitle } from '../../../../components/SectionTitle';
import { NewsCard } from './components/NewsCard';

// Data

import { news } from './data';

// Styles

import './styles.scss';

// ----------------

export const SectionNews = props => {
  const cardClickHandler = id => {
    console.log('card-id -->', id);
  };
  // Render

  return (
    <section className="news">
      <ContentContainer maxWidth="1600">
        <div className="news__content">
          <SectionTitle
            className="news__title"
            fluidWidth
            color="primary"
            title="Latest News"
          
          />

          {/* <div className="news__cards-wrapper"> */}
          <CustomSlider className="news__slider">
            {news.map(item => {
              return (
                <NewsCard
                  handleClick={cardClickHandler}
                  className="news__card"
                  description={item.description}
                  author={item.author}
                  avatar={item.avatar}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
          </CustomSlider>
          {/* </div> */}
        </div>
      </ContentContainer>
    </section>
  );
};

// ----------------

// Type of props

SectionNews.propTypes = {
  prop: types.string,
};

// Default value for props

SectionNews.defaultProps = {};
