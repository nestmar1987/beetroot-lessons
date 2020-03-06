import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const Button = ({ children, withBorder,borderColor, smallSize, largeSize }) => {
  const modify = classNames({
    'button--with-border': withBorder,
    [`button--border-${borderColor}`]: borderColor,
    'button--small-size': smallSize,
    'button--large-size': largeSize,
  
  });

  return <button className={`button ${modify}`}>{children}</button>;
};

export default Button;
