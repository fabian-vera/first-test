import React, { Component } from 'react';

class SongItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="songItem" datasrc={this.props.item.url}>
                <img src={this.props.item.thumbnail} />
                <strong>{this.props.item.title}</strong>
            </li>
        );
    }
}

export default SongItem;