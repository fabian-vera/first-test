import React, { Component } from 'react';
import SongItem from './songItem'

class SongList extends Component {
    render() {
        return (
            <div className="songList">
                <h3>Song List</h3>
                <ul>
                    <SongItem />
                </ul>
            </div>
        );
    }
}

export default SongList;