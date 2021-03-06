import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './private';
import { LocalStorage } from '../helpers';
import {
  Dashboard,
  Login
} from '../screens';

let publicRoutes =  [
    {
      path: '/login',
      component: Login,
    },
  ];

let privateRoutes =  [
  {
    path: '/',
    component: Dashboard,
  },
];

const Router = props => {
  const token = LocalStorage.getToken();

  return (
    // <ConnectedRouter history={ props.history }>
    <Switch>
      {
        publicRoutes.map(route =>
          <Route
            key={ route.path }
            exact path={ route.path }
            render={ props => {
              return !token
                ? (
                  <route.component
                    { ...props }
                  />
              ) : (
                <Redirect
                  to={ {
                    pathname: '/',
                  } }
                />
              );
            } }
          />
        )
      }
      {
        privateRoutes.map(route =>
          <PrivateRoute key={ route.path } exact path={ route.path } component={ route.component }/>
        )
      }
      {/* <Redirect to={ '/not-found' }/> */}
    </Switch>
    // </ConnectedRouter>
  );
};

export default Router;
