import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Components/Player';
import SongList from './Components/SongList';
import Search from './Components/Search'

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