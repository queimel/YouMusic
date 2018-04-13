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
            tiempoTranscurrido: 0
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

    timeUpdate(){
        
        let player = this.state.player;
        let duracion = 0
        let play = false

        player.on('playing', () => {
            duracion = player.getDuration()
            play = true
        })

       
        player.on('timeupdate', (seconds) => {
            if(play){
                let tiempoTranscurrido = (seconds*100) / duracion
                tiempoTranscurrido = Math.floor(tiempoTranscurrido)
                if(tiempoTranscurrido === Infinity){
                    tiempoTranscurrido = 0
                }
                this.setState({ tiempoTranscurrido: tiempoTranscurrido })

                this.timeTrigger()
            }
        })
        
    }

    timeTrigger(){
        this.props.getTimePlayed(this.state.tiempoTranscurrido);
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