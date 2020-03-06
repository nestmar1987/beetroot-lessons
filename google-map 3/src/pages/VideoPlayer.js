import ReactPlayer from 'react-player';
import { Shell } from '../components/Shell';
import React from 'react';
import styled from 'styled-components';
import VideoCard from '../components/VideoCard';

const VideoWrapper = styled.div`
  position: relative;
  border: 1px solid green;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }
`;

export const VideoPlayer = () => {
  return (
    <Shell>
      <VideoWrapper>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          controls
          width="100%"
          height="auto"
          config={{
            youtube: {
              playerVars: { showinfo: 2 },
            },
          }}
        />
      </VideoWrapper>

      <VideoCard url="https://www.youtube.com/embed/L3wKzyIN1yk" />
    </Shell>
  );
};
