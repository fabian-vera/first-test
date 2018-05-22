import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import SongInfo from './songInfo';
import PlayerControls from './playerControls';

class Player extends Component {

    constructor(props) {
        super(props);   
    }

    render() {
        let urlItem;
        if(this.props.apimp){
            urlItem = this.props.apimp.map(song => {
            return (
                <audio key={song.url} src={song.url} controls />
            );
          });
        }
        return (
        <div className="playerContainer">
            {urlItem}
        </div>
        );
    }
}

export default Player;