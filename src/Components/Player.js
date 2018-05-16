import React, { Component } from 'react';
import SongInfo from './SongInfo';
import PlayerControls from './PlayerControls'

class Player extends Component {
    render() {
        return (
            <div className="Player">
                <h3>Player</h3>
                <SongInfo />
                <PlayerControls />
            </div>
        );
    }
}

export default Player;