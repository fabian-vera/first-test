import React, { Component } from 'react';

class SongItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="songItem">
                <a
                    onClick={this.props.clickedSongItem} 
                    href={this.props.item.url}
                    name={this.props.item.thumbnail}
                    title={this.props.item.title} >
                        <div className='row'>
                            <div className='col-3'><img src={this.props.item.thumbnail} /></div>
                            <div className='col-8'><span>{this.props.item.title}</span></div>
                            <i class="fas fa-chevron-right icon-bg"></i>
                        </div>
                </a>
            </li>
        );
    }
}

export default SongItem;