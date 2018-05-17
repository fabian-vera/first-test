import React, { Component } from 'react';
import SongInfo from './songInfo';
import PlayerControls from './playerControls'

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apimp: []
        }
    }

    componentWillMount() {
        fetch('http://desamovil.cl:3001/mp3/?url=https://www.youtube.com/watch?v=qrm-kGEA6jA')
          .then((response) => {
            return response.json()
          })
          .then((apimp) => {
            this.setState({ apimp: apimp })
          })
    }

    render() {
        return (
            <div className="player">
                <h3>Player</h3>
                <span>URL: {this.state.apimp.url}</span>
                <SongInfo />
                <PlayerControls />
            </div>
        );
    }
}

export default Player;