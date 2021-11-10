import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  grid-template-columns: 70% 30%;
  grid-template-areas: 'img login';
  background-image: url('https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg');
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
`;

export const StyledPassword = styled.input`
  border-radius: 100px;
  height: 2em;
  width: 14em;
  text-align: center;
  font-size: 18px;
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
  box-shadow: -1px -1px 2px 0px black;
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
  box-shadow: -1px -1px 2px 0px black;
  cursor: pointer;
`;
