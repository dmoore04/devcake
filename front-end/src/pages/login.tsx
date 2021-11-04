import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';

const LoginPage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  return (
    <div>
      <h1> DevCake</h1>
      <h2>Witty Slogan.</h2>
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
        <input type="password" name="password" id="password" placeholder="Password"></input>
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
