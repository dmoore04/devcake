// import { UserContext } from './contexts/User';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import routes from './config/routes';
import logging from './config/logging';
import UserContext from './contexts/UserContext';
import IUser from './interfaces/user';

const App: React.FC = () => {
  const [user, setUser] = useState<IUser>({
    _id: '',
    username: '',
    avatarUrl: '',
    name: '',
    topics: [],
    media: [],
    saved: [],
  });

  useEffect(() => {
    logging.info('Loading app...');
    const loggedInUserContext: string | null = localStorage.getItem('devCakeUser');
    if (loggedInUserContext) {
      const userObj = JSON.parse(loggedInUserContext);
      setUser(userObj);
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
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
      </UserContext.Provider>
    </div>
  );
};

export default App;
