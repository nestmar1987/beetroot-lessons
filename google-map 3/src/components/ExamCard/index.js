import styled, { css } from 'styled-components';
import React from 'react';

export const ExamCard = ({ gender, name, work }) => {
  return (
    <Card gender={gender}>
      <p>{name}</p>
      <p>{work}</p>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth || '300px'};
  height: 150px;
  border-radius: 5px;
  border: 1px solid black;
  color: white;

  ${({ gender }) => {
    if (gender === 'male') {
      return css`
        background-color: blue;
      `;
    }

    if (gender === 'female') {
      return css`
        background-color: red;
      `;
    }
  }}
`;
