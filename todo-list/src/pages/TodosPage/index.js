import React from 'react';

// Containers

import { ContentContainer } from '../../components/ContentContainer';
import { TodosContainer } from '../../containers/TodosContainer';
import { PageTitle } from '../../components/PageTitle';

// --------------------

export const TodosPage = () => {
  return (
    <ContentContainer>
      <PageTitle title="Todos List" />
      <TodosContainer />
    </ContentContainer>
  );
};
