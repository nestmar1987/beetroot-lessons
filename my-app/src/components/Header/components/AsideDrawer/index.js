import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const AsideDrawer = ({ links, isOpen }) => {
  const modify = classNames({
    'aside--is-open': isOpen,
  });

  return (
    <aside className={`aside ${modify}`}>
      {links.map(({ label, link }, index) => {
        return (
          <a className="aside__item" key={index} href={link}>
            {label}
          </a>
        );
      })}
    </aside>
  );
};

export default AsideDrawer;
