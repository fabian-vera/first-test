import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app';
import './css/index.css';

ReactDOM.render(
  <div>
    <AppContainer />
  </div>,  
  document.getElementById('app')
);

module.hot.accept();