import React, { Component } from 'react';

import YTPlayer from 'yt-player';
import './AudioPlayer.scss'

class AudioPlayer extends Component {

    constructor(props) {
        super(props);

        this.playerRef = React.createRef();
        this.onYouTubeReady = this.onYouTubeReady.bind(this);

        this.state = {
            player: {},
        }
    }
    
    componentDidMount() {
        this.props.onRef(this)
        const idPlayer = '#'+this.playerRef.current.id;
        const player = new YTPlayer(idPlayer);
        this.setState({player})
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
        let player = this.state.player;
        player.destroy();
    }

    onYouTubeReady(videoId) {
        let player = this.state.player;
        player.load(videoId)  
        this.playerPlay();
    }

    playerPlay(){
        let player = this.state.player;
        player.play();        
    }
    playerPause(){
        let player = this.state.player;
        player.pause();
    }

    render() {
        return (
            <div id="player" ref={this.playerRef}></div>
        );
    }
}

export default AudioPlayer;