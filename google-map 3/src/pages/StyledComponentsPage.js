import React from 'react';
import { Shell } from '../components/Shell';
import { ExamCard } from '../components/ExamCard';

const data = [
  { name: 'Marina', work: 'Monticello', gender: 'female' },
  { name: 'Andrey', work: 'Marvel', gender: 'male' },
  { name: 'Dimon', work: 'Weather', gender: 'male' },
  { name: 'Yuriy', work: 'Taxi', gender: 'male' },
];

export const StyledComponentsPage = () => {
  return (
    <Shell>
      <div>
        {data.map(({ gender, name, work }, index) => {
          return (
            <ExamCard gender={gender} name={name} work={work} key={index} />
          );
        })}
      </div>
    </Shell>
  );
};
