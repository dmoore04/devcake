import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';

const SignupPage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div>
      <h1> DevCake</h1>
      <h2>Witty Slogan.</h2>
      <form>
        <input type="text" name="fullName" id="fullName" placeholder="Full Name"></input>
        <br /> <br />
        <input type="text" name="email" id="email" placeholder="Email"></input>
        <br /> <br />
        <input type="text" name="username" id="username" placeholder="Username"></input>
        <br /> <br />
        <input type="password" name="password" id="password" placeholder="Password"></input>
        <br /> <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/log-in"> Sign in</Link>
      </p>
    </div>
  );
};

export default SignupPage;
