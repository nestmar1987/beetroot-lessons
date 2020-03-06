import React, { memo } from 'react';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

// Type of props

VideoCard.propTypes = {
  viewMode: types.string.isRequired,
  title: types.string,
  url: types.string,
};

// Default value for props

VideoCard.defaultProps = {
  title: '-',
};

// ----------------

function VideoCard(props) {
  const { title, url } = props;

  // Render

  return (
    <div className="video-card">
      <div className="video-card__video-wrapper">
        <iframe
          allowFullScreen="allowfullscreen"
          frameBorder="0"
          title={title}
          type="text/html"
          src={url}
        />
      </div>
    </div>
  );
}

export default memo(VideoCard);
