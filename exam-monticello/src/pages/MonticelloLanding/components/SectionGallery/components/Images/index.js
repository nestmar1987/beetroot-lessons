import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';



export const Images = ({images}) => {

  return <div className="images-wrapper">
    <div className="image--big" style={{backgroundImage:`url(${images.firstImg})`}}>
      <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
    <div className="image" style={{backgroundImage:`url(${images.fourthImg})`}}>
    <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
    <div className="image" style={{backgroundImage:`url(${images.secondImg })`}}>
    <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
    <div className="image" style={{backgroundImage:`url(${images.fifthImg})`}}>
    <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
    <div className="image" style={{backgroundImage:`url(${images.thirdImg})`}}>
    <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
  </div>;
};



// Type of props

Images.propTypes = {
  prop: types.string,
};

// Default value for props

Images.defaultProps = {};
