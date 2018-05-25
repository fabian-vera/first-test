/* eslint-env browser */
import React, { Component } from 'react';
import SongList from './songList';
import Player from './player';

const API = 'AIzaSyBwLREGuwxqd-boo81CaFeqCqZAclbuK-M';
const result = 20;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultyt: [],
      urlclickedyoutube: '',
      thumbclickedyoutube: '',
      titleclickedyoutube: '',
    };

    this.clickedSearch = this.clickedSearch.bind(this);
    this.clickedSongItem = this.clickedSongItem.bind(this);
    this.handleShowPlayer = this.handleShowPlayer.bind(this);
    this.enterKey = this.enterKey.bind(this);
    this.loader = this.loader.bind(this);
  }

  // Busqueda en Youtube
  clickedSearch() {
    this.loader();
    const filterText = document.getElementById('search').value;
    const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=relevance&type=video&videoDuration=medium&maxResults=${result}&q=${filterText}`;
    fetch(finalURL)
      .then(response => response.json())
      .then((responseJson) => {
        const resultyt = responseJson.items.map(item => ({
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
        this.setState({ resultyt });
        this.loader();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  clickedSongItem(event) {
    event.preventDefault();
    this.setState({ urlclickedyoutube: event.currentTarget.href });
    this.setState({ thumbclickedyoutube: event.currentTarget.name });
    this.setState({ titleclickedyoutube: event.currentTarget.title });
  }

  enterKey(e) {
    if (e.key === 'Enter') {
      this.clickedSearch(e);
    }
  }

  loader() {
    const loader = document.getElementById('loader');
    if (loader.classList.contains('visible')) {
      loader.classList.remove('visible');
    } else {
      loader.classList.add('visible');
    }
  }

  handleShowPlayer() {
    if (this.state.urlclickedyoutube !== '') {
      return (
        <Player
          urlclickedyoutube={this.state.urlclickedyoutube}
          thumbclickedyoutube={this.state.thumbclickedyoutube}
          titleclickedyoutube={this.state.titleclickedyoutube}
          loader={this.loader}
        />
      );
    }
    return '';
  }

  render() {
    return (
      <div className="appContainer row flex-xl-nowrap">
        <header className="col-12">
          <h1>ReactJS Music Player</h1>
          <div className="searchArea">
            <input onKeyPress={this.enterKey} type="text" id="search" placeholder="Search from Youtube..." />
            <button onClick={this.clickedSearch}><i className="fas fa-search" /></button>
          </div>
        </header>
        <main className="col-12" role="main">
          <SongList
            resultyt={this.state.resultyt}
            clickedSongItem={this.clickedSongItem}
          />
          {this.handleShowPlayer()}
        </main>
        <div id="loader">
          <div className="center-loader">
            <i className="fas fa-spinner fa-3x fa-spin" />
            <span>Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContainer;
