import React from 'react';
import { Link } from 'react-router-dom';
import { Shell } from '../components/Shell';

export const HelloPage = () => {
  return (
    <Shell withoutHome={false}>
      <div>
        <Link to="/resume">
          <p>Go to Resume</p>
        </Link>

        <Link to="/tabs">
          <p>Go to Tabs</p>
        </Link>

        <Link to="/styled-components">
          <p>Go to Styled Components</p>
        </Link>

        <Link to="/video">
          <p>Go to Video player</p>
        </Link>

        <Link to="/table">
          <p>Go to Custom Table</p>
        </Link>
      </div>
    </Shell>
  );
};
