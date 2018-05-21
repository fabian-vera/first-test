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
        resultyt: []
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clickedSearch = this.clickedSearch.bind(this);
    }

    handleChange(event) {
        this.setState({filterText: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    }

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


  render(){ 
      console.log(this.state.resultyt);
    return (
        <div className="appContainer">
            <Search 
                filterText={this.state.filterText} 
                handleChange={this.handleChange}
                clickedSearch={this.clickedSearch}
            />
            <SongList 
                filterText={this.state.filterText}
                resultyt={this.state.resultyt}
            />
            <Player />
        </div>
    );
  }
}


export default AppContainer;