import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ApplicationLayout from './layouts/ApplicationLayout';
import AuthenticationLayout from './layouts/AuthenticationLayout';
import { ROUTE } from './constants/route';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const { isAuthenticated } = useSelector(state => state.login);

  return (
    <Switch>
      <PrivateRoute exact path={ROUTE.APP} component={ApplicationLayout} isAuthenticated={isAuthenticated} />
      <Route path={ROUTE.LOGIN} component={AuthenticationLayout} />
    </Switch>
  );
}

export default App;
