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
      </div>
    </Shell>
  );
};
