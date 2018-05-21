import React, { Component } from 'react';
import SongItem from './songItem';

    

class songList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let resultItems;
    if(this.props.resultyt){
      resultItems = this.props.resultyt.map(item => {
        return (
          <SongItem key={item.title} item={item} />
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