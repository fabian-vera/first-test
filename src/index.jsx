/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AppContainer from './components/app';
import './css/app.scss';

ReactDOM.render(
  <div>
    <AppContainer />
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
