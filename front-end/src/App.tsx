// import { UserContext } from './contexts/User';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import routes from './config/routes';
import logging from './config/logging';

const App: React.FC = ({}) => {
  useEffect(() => {
    logging.info('Loading app...');
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component name={route.name} {...props} {...route.props} />
                )}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
