// import { UserContext } from './contexts/User';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import LoginPage from './components/LoginPage';

const App: React.FC = ({}) => {
  const [user, setUser] = useState('');
  return (
    <BrowserRouter>
      <LoginPage user={user} setUser={setUser} />
      <div></div>
    </BrowserRouter>
  );
};

export default App;
