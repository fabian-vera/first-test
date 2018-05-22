import React, { Component } from 'react';
import Search from './search';
import SongList from './songList';
import Player from './player';

const API = 'AIzaSyBwLREGuwxqd-boo81CaFeqCqZAclbuK-M';
const result = 5;

class AppContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        resultyt: [],
        urlclickedyoutube: '',
        apimp: []
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clickedSearch = this.clickedSearch.bind(this);
      this.clickedSongItem = this.clickedSongItem.bind(this);
      this.handleShowPlayer = this.handleShowPlayer.bind(this);
    }

    handleChange(event) {
        this.setState({filterText: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    }

    // Busqueda en Youtube
    clickedSearch(){
        var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=relevance&maxResults=${result}&q=${this.state.filterText}`
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
              const resultyt = responseJson.items.map(item => ({
                  title: item.snippet.title,
                  thumbnail: item.snippet.thumbnails.default.url,
                  url: `https://www.youtube.com/watch?v=${item.id.videoId}`
              }));
              this.setState({resultyt});
            })
            .catch((error) => {
              console.error(error);
            });
    }

    clickedSongItem(event) {     
        this.setState({urlclickedyoutube: event.target.value});
    }

    handleShowPlayer() {
        if(this.state.urlclickedyoutube != '') {
           return ( 
           <Player
            filterText={this.state.filterText}
            resultyt={this.state.resultyt}
            urlclickedyoutube={this.state.urlclickedyoutube}
            />
           );
        }
        return '';
    }


  render(){ 
    return (
        <div className="appContainer">
            <div className="searchArea">
                <h3>Filtertext {this.state.filterText}</h3>
                <input type="text" value={this.state.filterText} onChange={this.handleChange} />
                <button onClick={this.clickedSearch}>SEARCH</button>
            </div>
            <SongList 
                filterText={this.state.filterText}
                resultyt={this.state.resultyt}
                clickedSongItem={this.clickedSongItem}
            />
            {this.handleShowPlayer()}
        </div>
    );
  }
}


export default AppContainer;