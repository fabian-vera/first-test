import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SongInfo extends Component {
  render() {
    return (
      <div className="songInfo col-12">
        <div className="row">
          <div className="col-8 songTitle">
            <h2>{this.props.titleclickedyoutube}</h2>
          </div>
          <div className="col-4 songThumb">
            <img src={this.props.thumbclickedyoutube} alt={this.props.titleclickedyoutube} />
          </div>
        </div>
      </div>
    );
  }
}

SongInfo.propTypes = {
  thumbclickedyoutube: PropTypes.string.isRequired,
  titleclickedyoutube: PropTypes.string.isRequired,
};

export default SongInfo;
