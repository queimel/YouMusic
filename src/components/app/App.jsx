import React, { Component } from 'react';
import Home from '../Home/Home';
import AudioPlayer from '../audioplayer/AudioPlayer'
import MiniPlayer from '../MiniPlayer/MiniPlayer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import VisualPlayer from '../visualPlayer/VisualPlayer'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            PlayingSong: false,
            songPlayedInfo: {}
        }
    }

    componentWillMount(){
        if(localStorage.getItem("latestSearches") === null){
            localStorage.setItem("latestSearches", JSON.stringify([]));
        }
    }

    playerLoad(songInfo){

        // Recibe ID de cancion de YT
        let song = songInfo
        // Almacena info necesaria de cancion
        let songId = song.id.videoId;
        let songTitle = song.snippet.title
        let songImg = song.snippet.thumbnails.high.url

        let songToPlay = { 
            "songId": songId,
            "songTitle": songTitle,
            "songImg": songImg
        }

        // le pasa la id de la cancion al YT player
        this.player.onYouTubeReady(songToPlay.songId);

        // Setea los estados
        this.setState(
            { 
                PlayingSong: true,
                songPlayedInfo: songToPlay
            }
        )

        // Almacena la cancion en localStorage para guardarlo en las busquedas recientes
        let songStorage = this.state.songPlayedInfo

        let busquedas = [];
        busquedas = JSON.parse(localStorage.getItem("latestSearches"));

        busquedas.push(songStorage);
        localStorage.setItem('latestSearches', JSON.stringify(busquedas));

    }

    playerPlay(){
        this.player.playerPlay();
        this.setState({PlayingSong: true})
    }

    playerPause(){
        this.player.playerPause();
        // this.setState({PlayingSong: false})
    }

    showVisualPlayer(){
        this.setState({ VisualPlayerOn: true})
        console.log(this.state.VisualPlayerOn)
    }

    hideVisualPlayer(){
        this.setState({ VisualPlayerOn: false})
    }

    render() {
        return (
            <div id="app">
                <Home 
                    songInfo={this.playerLoad.bind(this)}
                    searchResults={this.state.son}
                />
                <ReactCSSTransitionGroup
                    transitionName="mp"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    
                    {this.state.PlayingSong
                        ? <MiniPlayer 
                            title={this.state.songPlayedInfo.songTitle} 
                            image={ this.state.songPlayedInfo.songImg} 
                            playerState={this.state.PlayingSong}
                            onClickMp={this.showVisualPlayer.bind(this)}
                            /> 
                        : '' }  
                </ReactCSSTransitionGroup>                     
                <AudioPlayer onRef={ref => (this.player = ref)}  />

                <ReactCSSTransitionGroup
                    transitionName="vp"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>

                    {
                        this.state.VisualPlayerOn
                        ? <VisualPlayer 
                            title={this.state.songTitle} 
                            image={ this.state.songImg} 
                            playerState={this.state.PlayingSong}                        
                        />
                        : null
                    }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App;