import React from 'react';
import PropTypes from 'prop-types';

import { LoginContext } from './context.js';
import { useContext } from 'react';

const If = props => {
  return props.condition ? props.children : null;
};

console.log('auth loaded');

const Auth = props => {
  const context = useContext(LoginContext);

  console.log("AUTH RENDER");
  let okToRender =
    context.loggedIn &&
    (props.capability
      ? context.user.capabilities && context.user.capabilities.includes(props.capability)
      : true);
  return(
    <If condition={okToRender}>{props.children}</If>
  );
}

Auth.propTypes = {
  capability: PropTypes.string.isRequired,
};

export default Auth;
