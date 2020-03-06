import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { FirstProduct } from '../pages/FirstProduct';
import { SecondProduct } from '../pages/SecondProduct';
import { ThirdProduct } from '../pages/ThirdProduct';
import { FourthProduct } from '../pages/FourthProduct';
import { FifthProduct } from '../pages/FifthProduct';
import { SixthProduct } from '../pages/SixthProduct';


export const Routes = () => {
  return (
    <Switch>
      <Route component={FirstProduct} path="/1" exact />
      <Route component={SecondProduct} path="/2" exact />
      <Route component={ThirdProduct} path="/3" exact />
      <Route component={FourthProduct} path="/4" exact />
      <Route component={FifthProduct} path="/5" exact />
      <Route component={SixthProduct} path="/6" exact />
      <Route component={HomePage} path="/" exact />
      {/* <Route component={TabsPage} path="/tabs" exact /> */}
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
