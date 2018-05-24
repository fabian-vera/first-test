import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './css/app.scss';


ReactDOM.render(
  <div>
    <AppContainer />
  </div>,  
  document.getElementById('app')
);

module.hot.accept();