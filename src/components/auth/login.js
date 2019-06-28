import superagent from 'superagent';
import React from 'react';
import { LoginContext } from './context.js';
import { useState, useContext } from 'react';

const API = process.env.REACT_APP_API;

const If = props => {
  return !!props.condition ? props.children : null;
};

const Login = props => {

  const [username, handleUsername] = useState('');
  const [password, handlePassword] = useState('');
  const context = useContext(LoginContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    superagent
    .post(`${API}/signin`)
    .auth(username, password)
    .then(response => {
      let token = response.text;
      context.login(token);
    })
    .catch(console.error);
  };

  return(
    <>
      <If condition={context.loggedIn}>
        <button onClick={context.logout}>
          Log Out
        </button>
      </If>
      <If condition={!context.loggedIn}>
        <div>
          <form onSubmit={event => handleSubmit(event)}>
            <input
              placeholder="username"
              name="username"
              onChange={(event) => {handleUsername(event.target.value)}}
            />
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={event => {handlePassword(event.target.value)}}
            />
            <input type="submit" value="login" />
          </form>
        </div>
      </If>
    </>
  );
}

export default Login;
