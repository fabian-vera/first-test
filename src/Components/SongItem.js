import React, { Component } from 'react';

class SongItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="songItem">Song ITEM - {this.props.filterText}</li>
        );
    }
}

export default SongItem;