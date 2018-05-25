/* eslint-env browser */
import React, { Component } from 'react';
import axios from 'axios';
import SongList from './songList';
import Player from './player';
import Loader from './loader';

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
      showloader: false,
    };

    this.clickedSearch = this.clickedSearch.bind(this);
    this.clickedSongItem = this.clickedSongItem.bind(this);
    this.handleShowPlayer = this.handleShowPlayer.bind(this);
    this.enterKey = this.enterKey.bind(this);
  }

  // Busqueda en Youtube
  clickedSearch() {
    this.setState({ showloader: true });
    const filterText = document.getElementById('search').value;
    const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=relevance&type=video&videoDuration=medium&maxResults=${result}&q=${filterText}`;
    axios.get(finalURL)
      .then((responseJson) => {
        const resultyt = responseJson.data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
        this.setState({ resultyt, showloader: false });
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
        <Loader showloader={this.state.showloader} />
      </div>
    );
  }
}

export default AppContainer;
