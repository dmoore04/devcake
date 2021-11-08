import React, { useEffect, useState, useContext } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link, Redirect } from 'react-router-dom';
import { postUser } from '../utils/api';
import INewUser from '../interfaces/newUser.interface';
import UserContext from '../contexts/UserContext';

const SignUpPage: React.FC<IPage> = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setSubmitted(false);
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const userInfo: INewUser = {
      name: nameInput,
      email: emailInput,
      username: usernameInput,
      password: passwordInput,
    };
    postUser(userInfo)
      .then((newUser) => {
        console.log(newUser);
        setUser(newUser);
        //NEED TO SEND TO LOCAL STORAGE
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (submitted) {
    return <Redirect push to={{ pathname: '/topic-choice' }} />;
  }

  return (
    <div>
      <h1> DevCake</h1>
      <h2>Witty Slogan.</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        ></input>
        <br /> <br />
        <input
          required
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        ></input>
        <br /> <br />
        <input
          required
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        ></input>
        <br /> <br />
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        ></input>
        <br /> <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/log-in"> Sign in</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
