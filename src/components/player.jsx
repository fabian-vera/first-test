/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import SongInfo from './songInfo';
import Loader from './loader';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apimp: '',
      showloader: false,
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
    this.setState({ showloader: true });
    const urlToService = `http://localhost:3001/mp3/?url=${link}`;
    fetch(urlToService)
      .then(response => response.json())
      .then((apimp) => {
        this.setState({ apimp: apimp.url, showloader: false });
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

  pauseSong() {
    const audio = document.getElementsByTagName('audio')[0];
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
        <Loader showloader={this.state.showloader} />
      </div>
    );
  }
}

Player.propTypes = {
  thumbclickedyoutube: PropTypes.string, // eslint-disable-line react/forbid-prop-types
  urlclickedyoutube: PropTypes.string, // eslint-disable-line react/forbid-prop-types
  titleclickedyoutube: PropTypes.string, // eslint-disable-line react/forbid-prop-types
};

export default Player;
