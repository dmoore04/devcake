import React, { useState } from 'react';
import { getUserInfo } from '../utils/api';

const oldLoginPage: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [isInvalidUser, setIsInvalidUser] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login" className="LogInForm__log-in-instructions">
          Please Type your Name Here To Log In:{' '}
        </label>
        <input
          type="text"
          id="login"
          onChange={(e) => {
            setNewUser(e.target.value);
          }}
          value={newUser}
          placeholder="try 'grumpy19'"
          className="LogInForm__input--log-in"
        />
        <button>LOGIN!</button>
        {isInvalidUser && (
          <h2 className="LogInForm--invalid-username-message">
            Invalid username, please try again
          </h2>
        )}{' '}
        :
      </form>
    </div>
  );
};

export default oldLoginPage;
