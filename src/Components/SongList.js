import React, { Component } from 'react';
import SongItem from './songItem';

    

class songList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let resultItems;
    if(this.props.resultyt){
      resultItems = this.props.resultyt.map((item, i) => {
        return (
          <SongItem key={i} item={item} 
            clickedSongItem={this.props.clickedSongItem} 
          />
        );
      });
    }
    return (
      <div className="songList">
        {resultItems}
      </div>
    );
  }

  
}

export default songList;