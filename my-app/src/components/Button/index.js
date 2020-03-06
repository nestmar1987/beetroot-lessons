import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const Button = ({ children, withBorder, borderColor }) => {
  const modify = classNames({
    'button--with-border': withBorder,
    [`button--border-${borderColor}`]: !!borderColor,
  });

  return <button className={`button ${modify}`}>{children}</button>;
};

export default Button;
