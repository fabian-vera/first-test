import React, { Component } from 'react';

const API = 'AIzaSyBwLREGuwxqd-boo81CaFeqCqZAclbuK-M';
const result = 5;

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultyt: []
          };
          
        this.clicked = this.clicked.bind(this);
        this.handleChange = this.handleChange.bind(this);

      }
    
      handleChange(e) {
        this.props.onHandleChange(e.target.value);
      }

      clicked(){
        var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=relevance&maxResults=${result}&q=${this.props.filterText}`
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
    
    render() {
        return (
            <div className="searchArea">
                <input type="text" value={this.props.filterText} onChange={this.handleChange} />
                <button onClick={this.clicked}>SEARCH</button>
                    {
                        this.state.resultyt.map((item, i) => {
                        var itemVideo = <li key={i} className="youtube">
                            <div datasrc={item.url}>
                            <img src={item.thumbnail} />
                            <h4>{item.title}</h4>
                            </div>
                        </li>
                        return itemVideo;
                        })
                    }
                    {this.itemVideo}
            </div>
        );
    }
}

export default Search;