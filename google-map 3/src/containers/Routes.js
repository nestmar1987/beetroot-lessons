import { Switch, Route, Redirect } from 'react-router-dom';
import { StyledComponentsPage } from '../pages/StyledComponentsPage';
import { VideoPlayer } from '../pages/VideoPlayer';
import { ResumePage } from '../pages/ResumePage';
import { HelloPage } from '../pages/HelloPage';
import { TabsPage } from '../pages/TabsPage';
import React from 'react';

export const Routes = () => {
  return (
    <Switch>
      <Route component={ResumePage} path="/resume" exact />
      <Route component={HelloPage} path="/" exact />
      <Route component={TabsPage} path="/tabs" exact />
      <Route component={StyledComponentsPage} path="/styled-components" exact />
      <Route component={VideoPlayer} path="/video" exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
