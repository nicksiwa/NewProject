import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { route } from '../constants/route';

const PrivateRoute = ({component: Component, ...rest}) => {
  const { isAuthenticated } = rest;

  return (
    <Route
      {...rest}
      render={
        props => isAuthenticated ?
          <Component {...props} />
          :
          <Redirect to={{ pathname: route.login }} />
      }
    />
  );
}

export default PrivateRoute;
