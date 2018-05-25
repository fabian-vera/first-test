/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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
      const audio = document.getElementsByTagName('audio')[0];
      audio.pause();
    }
  }

  fecthService(link) {
    this.setState({ showloader: true });
    const urlToService = `http://localhost:3001/mp3/?url=${link}`;
    axios.get(urlToService)
      .then((apimp) => {
        this.setState({ apimp: apimp.data.url, showloader: false });
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
  thumbclickedyoutube: PropTypes.string.isRequired,
  urlclickedyoutube: PropTypes.string.isRequired,
  titleclickedyoutube: PropTypes.string.isRequired,
};

export default Player;
