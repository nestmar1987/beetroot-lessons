import types from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles

import './styles.scss';

// ----------------

export const SocialBlock = ({ links }) => {
  
  return (
    <div className="social-block">
      {links.map(({ icon, link, name }, index) => {
        return (
          <a
            className={`social-icon__wrapper-${name}`}
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            key={index}
          >
            <ReactSVG className= {`social-icon__${name}`} src={icon} />
          </a>
        );
      })}
    </div>
  );
};

// ----------------

// Type of props

SocialBlock.propTypes = {
  links: types.array.isRequired,
};

// Default value for props

SocialBlock.defaultProps = {};
