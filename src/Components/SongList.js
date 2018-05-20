import React, { Component } from 'react';
import SongItem from './songItem';

    

class songList extends Component {
  constructor(props){
    super(props);
  }


  render(){
    

    return(
      <div>
          <span>SONGLIST - {this.props.filterText}</span>
          <SongItem filterText={this.props.filterText}/>
     </div>
    );
  }
}

export default songList;