import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Profile } from '../pages/Profile';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Main} path="/" exact />
      <Route component={Profile} path="/profile" exact />
    </Switch>
  );
}
