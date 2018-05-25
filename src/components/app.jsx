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
  }

  // Busqueda en Youtube
  clickedSearch() {
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

  handleShowPlayer() {
    if (this.state.urlclickedyoutube !== '') {
      return (
        <Player
          urlclickedyoutube={this.state.urlclickedyoutube}
          thumbclickedyoutube={this.state.thumbclickedyoutube}
          titleclickedyoutube={this.state.titleclickedyoutube}
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
            <input type="text" id="search" placeholder="Search from Youtube..." />
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
      </div>
    );
  }
}

export default AppContainer;
