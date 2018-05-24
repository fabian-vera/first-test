import React, { Component } from 'react';
import AudioPlayer from "react-h5-audio-player";
import SongInfo from './songInfo';
import PlayerControls from './playerControls';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apimp: ''
        }
        this.showAudioPlayer = this.showAudioPlayer.bind(this);
        this.fecthService = this.fecthService.bind(this);
    }

    
    loader() {
        let loader = document.getElementById('loader');
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

    fecthService(link) {
        this.loader();
        var urlToService = `http://localhost:3001/mp3/?url=${link}`;
        console.log('URLTOSERVICE'+urlToService);
        fetch(urlToService)
        .then((response) => {
            return response.json()
        })
        .then((apimp) => {
            this.setState({ apimp: apimp.url })
            this.loader();
        })
    }

    // Reproductor de MP3
    componentDidMount() {
        this.fecthService(this.props.urlclickedyoutube);
    }

    componentWillUpdate(nextProps) {
        if(nextProps.urlclickedyoutube != this.props.urlclickedyoutube) {
            this.fecthService(nextProps.urlclickedyoutube);
            this.pauseSong();
        }
    }
    
    showAudioPlayer() {
        if (this.state.apimp) {
            return <AudioPlayer
                    className="audioPlayer"
                    autoPlay
                    src={this.state.apimp}
                />                    
        }
        return ''
    }
    

    render() {
        return (
        <div className="playerContainer">
            <SongInfo
                thumbclickedyoutube={this.props.thumbclickedyoutube}
                titleclickedyoutube={this.props.titleclickedyoutube}
            />
            {this.showAudioPlayer()}
            <div id='loader'>
                <div className='center-loader'>
                    <i className='fas fa-spinner fa-3x fa-spin'></i>
                    <span>Loading next track...</span>
                </div>
            </div>
        </div>
        );
    }
}



export default Player;