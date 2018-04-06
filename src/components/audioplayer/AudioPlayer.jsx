import React, { Component } from 'react';

import YTPlayer from 'yt-player';

class AudioPlayer extends Component {

    constructor(props) {
        super(props);

        this.playerRef = React.createRef();
        this.onYouTubeReady = this.onYouTubeReady.bind(this);

        this.state = {
            playerState: false,

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

    cargaide(id){
        console.log(id);
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    render() {
        return (
            <div id="player" ref={this.playerRef}></div>
        );
    }
}

export default AudioPlayer;