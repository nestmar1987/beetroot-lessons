import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ResumePage } from '../pages/ResumePage';
import { HelloPage } from '../pages/HelloPage';
import { TabsPage } from '../pages/TabsPage';

export const Routes = () => {
  return (
    <Switch>
      <Route component={ResumePage} path="/resume" exact />
      <Route component={HelloPage} path="/" exact />
      <Route component={TabsPage} path="/tabs" exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
