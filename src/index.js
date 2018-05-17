import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/player';
import SongList from './components/songList';
import Search from './components/search';
import './css/index.css';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>
    <h1>{title}</h1>
    <Search />
    <SongList />
    <Player />
  </div>,  
  document.getElementById('app')
);

module.hot.accept();