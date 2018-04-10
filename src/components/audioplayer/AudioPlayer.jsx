import React, { Component } from 'react';

import YTPlayer from 'yt-player';

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
        player.setVolume(100)

        player.play()

        /*player.on('playing', () => {
            console.log(player.getDuration()) // => duracion en segundos
        })*/
    }

    render() {
        return (
            <div id="player" ref={this.playerRef}></div>
        );
    }
}

export default AudioPlayer;