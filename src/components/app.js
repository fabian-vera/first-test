import React, { Component } from 'react';
import Search from './search';
import SongList from './songList';
import Player from './player';

class AppContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }


  render(){ 
    return (
        <div className="appContainer">
            <Search filterText={this.state.filterText} onHandleChange={this.handleChange} />
            <SongList filterText={this.state.filterText}/>
            <Player />
        </div>
    );
  }
}


export default AppContainer;