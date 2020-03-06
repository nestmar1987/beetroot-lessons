import React from 'react';
import Collapsible from 'react-collapsible';

export const CustomCollapse = ({ children }) => {
  return <Collapsible trigger="Start here">{children}</Collapsible>;
};
