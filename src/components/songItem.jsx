import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SongItem extends Component {
  render() {
    return (
      <li className="songItem">
        <a
          onClick={this.props.clickedSongItem}
          href={this.props.item.url}
          name={this.props.item.thumbnail}
          title={this.props.item.title}
        >
          <div className="row">
            <div className="col-3">
              <img src={this.props.item.thumbnail} alt={this.props.item.title} />
            </div>
            <div className="col-8"><span>{this.props.item.title}</span></div>
            <i className="fas fa-chevron-right icon-bg" />
          </div>
        </a>
      </li>
    );
  }
}

SongItem.propTypes = {
  clickedSongItem: PropTypes.func.isRequired,
  item: PropTypes.arrayOf.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SongItem;
