import React from 'react';

import Input from './../../../../components/Input';
import Button from './../../../../components/Button';
import FontIcon from './../../../../components/FontIcon';

import './styles.scss';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="content-container hero__container">
        <div className="hero__title-block">
          <h1>Bhromaon</h1>
          <p>Safe Travel Anywhere</p>

          <div className="hero__search-wrapper">
            <Input placeholder="Search Your Travel Destination" />
            <div className="hero__search-btn-wrapp">
              <Button withBorder borderColor="black">
                Search
                <FontIcon icon="search" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
