import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const PageTitle = ({ marginBottom, title, style }) => {
  // Modify styles

  const modify = classNames({
    ' page-title--margin-bottom': marginBottom,
  });

  // Render

  return (
    <h1 className={`page-title${modify}`} style={style}>
      {title}
    </h1>
  );
};

// ----------------

// Type of props

PageTitle.propTypes = {
  marginBottom: types.bool,
  title: types.string.isRequired,
  style: types.object,
};

// Default value for props

PageTitle.defaultProps = {
  marginBottom: true,
};
