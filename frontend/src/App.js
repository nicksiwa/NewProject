import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ApplicationLayout from './layouts/ApplicationLayout';
import AuthenticationLayout from './layouts/AuthenticationLayout';
import { route } from './constants/route';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const { isAuthenticated } = useSelector(state => state.login);

  return (
    <Switch>
      <PrivateRoute exact path={route.app} component={ApplicationLayout} isAuthenticated={isAuthenticated} />
      <Route path={route.login} component={AuthenticationLayout} />
    </Switch>
  );
}

export default App;
