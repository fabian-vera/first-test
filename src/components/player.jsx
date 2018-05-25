/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import SongInfo from './songInfo';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apimp: '',
    };
    this.showAudioPlayer = this.showAudioPlayer.bind(this);
    this.fecthService = this.fecthService.bind(this);
  }

  componentDidMount() {
    this.fecthService(this.props.urlclickedyoutube);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.urlclickedyoutube !== this.props.urlclickedyoutube) {
      this.fecthService(nextProps.urlclickedyoutube);
      this.pauseSong();
    }
  }

  fecthService(link) {
    this.loader();
    const urlToService = `http://localhost:3001/mp3/?url=${link}`;
    fetch(urlToService)
      .then(response => response.json())
      .then((apimp) => {
        this.setState({ apimp: apimp.url });
        this.loader();
      });
  }

  showAudioPlayer() {
    if (this.state.apimp) {
      return (<AudioPlayer
        className="audioPlayer"
        autoPlay
        src={this.state.apimp}
      />);
    }
    return '';
  }

  loader() {
    const loader = document.getElementById('loader');
    if (loader.classList.contains('visible')) {
      loader.classList.remove('visible');
    } else {
      loader.classList.add('visible');
    }
  }

  pauseSong() {
    let audio = document.getElementsByTagName('audio')[0];
    audio.pause();
  }

  render() {
    return (
      <div className="playerContainer">
        <SongInfo
          thumbclickedyoutube={this.props.thumbclickedyoutube}
          titleclickedyoutube={this.props.titleclickedyoutube}
        />
        {this.showAudioPlayer()}
        <div id="loader">
          <div className="center-loader">
            <i className="fas fa-spinner fa-3x fa-spin" />
            <span>Loading next track...</span>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  thumbclickedyoutube: PropTypes.string.isRequired,
  urlclickedyoutube: PropTypes.string.isRequired,
  titleclickedyoutube: PropTypes.string.isRequired,
};

export default Player;

