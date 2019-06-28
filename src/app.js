import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import LoginContext from './components/auth/context.js';

import ToDo from './components/todo/todo.js';
import Header from './components/header/header.js';

import './site.scss';

export default function App() {
  return (
    <BrowserRouter>
      <LoginContext>
        <Header />
        <ToDo />
      </LoginContext>
    </BrowserRouter>
  );
}