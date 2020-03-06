import className from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ContentContainer = ({ paddingbottom, paddingTop, children }) => {
  // Modify styles

  const modify = className({
    ' content-container__inner-wrapper--padding-bottom': paddingbottom,
    ' content-container__inner-wrapper--padding-top': paddingTop,
  });

  // Render

  return (
    <div className="content-container">
      <div className={`content-container__inner-wrapper${modify}`}>
        {children}
      </div>
    </div>
  );
};

// ----------------

// Type of props

ContentContainer.propTypes = {
  paddingbottom: types.bool,
  paddingTop: types.bool,
  children: types.node.isRequired,
};

// Default value for props

ContentContainer.defaultProps = {
  paddingbottom: true,
  paddingTop: true,
};
