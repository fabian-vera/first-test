import React, { Component } from 'react';

class SongItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <button className="songItem" value={this.props.item.url} onClick={this.props.clickedSongItem} urlclickedyoutube={this.props.urlclickedyoutube}>
                <img src={this.props.item.thumbnail} />
                <strong>{this.props.item.title}</strong>
            </button>
        );
    }
}

export default SongItem;