import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const Shell = ({ children, withoutHome = true }) => {
  return (
    <div className="shell">
      <header className="shell__header">
        {withoutHome && (
          <Link to="/">
            <p>Home</p>
          </Link>
        )}
      </header>
      <main className="shell__content">{children}</main>
    </div>
  );
};
