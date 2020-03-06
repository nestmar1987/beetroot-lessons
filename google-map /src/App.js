// Styles

import './styles/fonts.scss';
import './styles/index.scss';

import React from 'react';
import { Routes } from './containers/Routes';
import { Router } from 'react-router-dom';

import { history } from './utils/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
