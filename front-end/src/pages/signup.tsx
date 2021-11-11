import React, { useEffect, useState, useContext } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link, Redirect } from 'react-router-dom';
import { postUser } from '../utils/api';
import INewUser from '../interfaces/newUser.interface';
import UserContext from '../contexts/UserContext';
import {
  LoginContainer,
  SignUp,
  StyledLogin,
  StyledPassword,
  StyledTextInput,
} from '../styling/login_elements';

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
        localStorage.setItem('devCakeUser', JSON.stringify(newUser));
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (user.username && user.topics.length) {
    return <Redirect push to={{ pathname: '/' }} />;
  }

  if (submitted) {
    return <Redirect push to={{ pathname: '/topic-choice' }} />;
  }

  return (
    <LoginContainer>
      <StyledLogin>
        <h1 className="login__logo">
          <span className="light">Dev</span>Cake
        </h1>
        <h2 className="login__slogan">Cooking by the book.</h2>
        <br /> <br />
        <form onSubmit={handleSubmit}>
          <StyledTextInput
            required
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => {
              setUsernameInput(e.target.value);
            }}
          />
          <br /> <br />
          <StyledTextInput
            required
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full Name"
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
          />
          <br /> <br />
          <StyledTextInput
            required
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
          />
          <br /> <br />
          <StyledPassword
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
          />
          <br /> <br />
          <SignUp type="submit">Sign Up</SignUp>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/log-in" className="signup__link">
            Sign in
          </Link>
        </p>
      </StyledLogin>
    </LoginContainer>
  );
};

export default SignUpPage;
