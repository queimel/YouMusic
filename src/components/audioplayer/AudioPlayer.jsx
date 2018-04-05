import React, { Component } from 'react';

import YTPlayer from 'yt-player';

class AudioPlayer extends Component {

    constructor(props) {
        super(props);

        this.playerRef = React.createRef();
        this.onYouTubeReady = this.onYouTubeReady.bind(this);

        this.state = {
            videoToPlay: this.props.videoId
        }

    }
    

    onYouTubeReady(videoId) {

        const idPlayer = '#'+this.playerRef.current.id;

        const player = new YTPlayer(idPlayer);

        player.load(videoId)
        player.setVolume(100)

        player.play()

        player.on('playing', () => {
            console.log(player.getDuration()) // => duracion en segundos
        })

    }

    componentDidMount(){
        const id = this.state.videoToPlay

        console.log(id);
        /*const video = 'uetFO7y8WPA';
        this.onYouTubeReady(video);*/
    }

    render() {
        return (
            <div id="player" ref={this.playerRef}></div>
        );
    }
}

export default AudioPlayer;