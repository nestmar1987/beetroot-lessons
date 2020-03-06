import React, { useState } from 'react';
import SmoothCollapse from 'react-smooth-collapse';

export const CustomCollapseSmooth = ({ children }) => {
  const [expanded, toggleExpanded] = useState(false);

  function toggleExpandedHandle() {
    toggleExpanded(!expanded);
  }

  return (
    <>
      <button onClick={toggleExpandedHandle}>Click</button>
      <SmoothCollapse expanded={expanded} onChangeEnd={() => alert('Hello')}>
        {children}
      </SmoothCollapse>
    </>
  );
};
