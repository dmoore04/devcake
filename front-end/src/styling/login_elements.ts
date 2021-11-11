import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  grid-template-columns: 70% 30%;
  grid-template-areas: 'img login';
  background: url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')
    0 0;
  background-size: cover;
`;

export const StyledLogin = styled.section`
  border-left: 2px grey solid;
  grid-area: login;
  position: relative;
  padding: 30% 10%;
  background-color: white;
`;

export const StyledTextInput = styled.input`
  border-radius: 100px;
  height: 2em;
  width: 14em;
  text-align: center;
  font-size: 18px;
  border: 2px solid #e5e5e5;
`;

export const StyledPassword = styled.input`
  border-radius: 100px;
  height: 2em;
  width: 14em;
  text-align: center;
  font-size: 18px;
  border: 2px solid #e5e5e5;
`;

export const Login = styled.button`
  border-radius: 100px;
  height: 2em;
  width: 10em;
  background: #007922;
  color: white;
  font-weight: 400;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;
export const SignUp = styled.button`
  border-radius: 100px;
  height: 2em;
  width: 10em;
  background: #007922;
  color: white;
  font-weight: 400;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;
