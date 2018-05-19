import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Player from './components/player';
import SongList from './components/songList';
import Search from './components/search';
import './css/index.css';

ReactDOM.render(
  <div>
    <Search />
    {<SongList />}
    <Player />
  </div>,  
  document.getElementById('app')
);

module.hot.accept();