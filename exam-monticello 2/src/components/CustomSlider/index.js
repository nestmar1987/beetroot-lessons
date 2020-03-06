import React, { Component } from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';
import types from 'prop-types';
import { FontIcon } from '../FontIcon';

// Styles

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} font-icon-wraap`} onClick={onClick}>
      <FontIcon icon="add" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

// ----------------

class CustomSlider extends Component {
  // Type of props

  static propTypes = {
    prop: types.string,
  };

  // Default value for props

  static defaultProps = {};

  render() {
    const { children, className } = this.props;

    const defaultSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Slider {...defaultSettings} className={`slider ${className}`}>
        {children}
      </Slider>
    );
  }
}

export { CustomSlider };
