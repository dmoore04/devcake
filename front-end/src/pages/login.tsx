import React, { useEffect, useState, useContext } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import IUser from '../interfaces/user';
import { Redirect } from 'react-router';

const LoginPage: React.FC<IPage> = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  console.log('usernameInput:', usernameInput);
  console.log('passwordInput:', passwordInput);

  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  const responseFromMongo: IUser = {
    username: 'test--Brad',
    avatarURL: '',
    name: 'mr Test',
    topics: ['test topic'],
    media: ['test media'],
    saved: [],
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // const userinfo = { username: usernameInput, password: passwordInput };
    // fetchUser(userinfo).then(result=>{
    //   setUser(responseFromMongo);
    // })
    setUser(responseFromMongo);
    setSubmitted(true);
  };

  if (submitted) {
    return <Redirect push to={{ pathname: '/' }} />;
  }

  return (
    <div>
      <h1> DevCake</h1>
      <h2>Witty Slogan.</h2>
      {user.username ? <h3> {`Hello ${user.username}`} </h3> : <h3>"Hello guest" </h3>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        ></input>
        <br /> <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        ></input>
        <br /> <br />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/sign-up"> Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
