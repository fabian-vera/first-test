import React, { Component } from 'react';
import SongItem from './songItem';
import Player from './player';
import Search from './search';

const API = 'AIzaSyBwLREGuwxqd-boo81CaFeqCqZAclbuK-M';
const result = 5;
var searchByUser = 'lofi hiphop';
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=relevance&maxResults=${result}&q=${searchByUser}`

class SearchYoutube extends Component {
  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }

clicked(){
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
    const filterText = this.props.filterText;
    console.log('SONGLIST' + filterText);
    return(
      <div>
        <button onClick={this.clicked}>SEARCH</button>
          {
            this.state.resultyt.map((item, i) => {
              var itemVideo = <li key={i} className="youtube">
                <a href={item.url}>
                  <img src={item.thumbnail} />
                  <h4>{item.title}</h4>
                </a>
              </li>
              return itemVideo;
            })
          }
          {this.itemVideo}
          <SongItem />
     </div>
    );
  }
}

export default SearchYoutube;