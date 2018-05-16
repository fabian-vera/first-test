import React, { Component } from 'react';
import SongItem from './SongItem'

class SongList extends Component {
    render() {
        return (
            <div className="SongList">
                <h3>SongList</h3>
                <ul>
                    <SongItem />
                </ul>
            </div>
        );
    }
}

export default SongList;