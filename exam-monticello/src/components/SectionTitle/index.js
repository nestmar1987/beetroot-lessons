import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const SectionTitle = ({
  fluidWidth,
  className,
  subtitle,
  align,
  color,
  title,
}) => {
  // Modify styles

  const modify = classNames({
    [` section-title--align-${align}`]: align,
    [` section-title--color-${color}`]: color,
    'section-title--fluid-width': fluidWidth,
  });

  // Render

  return (
    <div className={`section-title ${className}${modify}`}>
      {!!subtitle ? (
        <p>{subtitle}</p>
      ) : (
        <div className="section-title__divider"></div>
      )}
      <p className="section-title__title">{title}</p>
    </div>
  );
};

// ----------------

// Type of props

SectionTitle.propTypes = {
  fluidWidth: types.bool,
  subtitle: types.string,
  title: types.string.isRequired,
  align: types.oneOf(['left', 'center', 'right']),
  color: types.oneOf(['primary', 'secondary']),
};

// Default value for props

SectionTitle.defaultProps = {
  color: 'secondary',
  align: 'center',
};
