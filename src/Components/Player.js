import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import SongInfo from './songInfo';
import PlayerControls from './playerControls';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apimp: ''
        }

        this.showAudioPlayer = this.showAudioPlayer.bind(this);
    }

    // Reproductor de MP3
    componentWillMount() {
        var urlToService = 'http://desamovil.cl:3001/mp3/?url=' + this.props.urlclickedyoutube;
        fetch(urlToService)
          .then((response) => {
            return response.json()
          })
          .then((apimp) => {
            this.setState({ apimp: apimp.url })
          })
    }

    showAudioPlayer() {
        if (this.state.apimp != '') {
            return <audio src={this.state.apimp} controls autoPlay />
        }
        return ''
    }

    render() {
        return (
        <div className="playerContainer">
            {this.showAudioPlayer()}
        </div>
        );
    }
}

export default Player;