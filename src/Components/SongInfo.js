import React, { Component } from 'react';

class SongInfo extends Component {

    render() {
        return (
            <div className='songInfo col-12'>
                <div className='row'>
                    <div className='col-8 songTitle'>
                        <h2>{this.props.titleclickedyoutube}</h2>
                    </div>
                    <div className='col-4 songThumb'>
                        <img src={this.props.thumbclickedyoutube} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SongInfo;