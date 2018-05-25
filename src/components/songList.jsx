/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SongItem from './songItem';

class songList extends Component {
  render() {
    let resultItems;
    if (this.props.resultyt) {
      resultItems = this.props.resultyt.map(item => (
        <SongItem
          key={item.id}
          item={item}
          clickedSongItem={this.props.clickedSongItem}
        />
      ));
    }
    return (
      <ul className="songList">
        {resultItems}
      </ul>
    );
  }
}

songList.propTypes = {
  clickedSongItem: PropTypes.func, // eslint-disable-line react/forbid-prop-types
  resultyt: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default songList;
