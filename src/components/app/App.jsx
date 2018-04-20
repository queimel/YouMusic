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
            songPlayedInfo: [],
            VisualPlayerOn: false,
            timePlayed: 0
        }
    }

    // recibe la informacion completa del video y se la envia al player para ser reproducida
    // tambien la almacena en localStorage
    playerLoad(songInfo){

        // Recibe ID de cancion de YT, con toda la info
        let song = songInfo

        // le pasa la id de la cancion al YT player
        this.player.onYouTubeReady(song.songId);

        // Setea los estados
        this.setState(
            { 
                PlayingSong: true,
                songPlayedInfo: song, 
                VisualPlayerOn: false
            }
        )
        // Almacena la cancion en localStorage para guardarlo en las busquedas recientes
        this.setLocalStorage(song)

        // el player emite cantidad de segundos
        let timePlayed = this.player.timeUpdate();
        // console.log(timePlayed);

    }

    // recibe una cancion, y comprueba si lastSearches existe en localStorage
    // en casod e no existir, crea la key, en caso contrario, hace un push para almacenar la cancion en la key ya existente
    setLocalStorage(song){
        let songStorage = song

        let busquedas = [];
        let lastSearches = this.getLocalStorage();

        if(lastSearches === null || lastSearches.length === 0){
            localStorage.setItem('latestSearches', JSON.stringify({}));
        }else{
            busquedas = JSON.parse(localStorage.getItem("latestSearches"));
        }

        busquedas.push(songStorage);
        localStorage.setItem('latestSearches', JSON.stringify(busquedas));
    }

    // obtiene todas las canciones almacenadas en localStorage
    getLocalStorage(){
        return JSON.parse(localStorage.getItem("latestSearches"));
    }

    // ejecuta plaayerPlay dentro de la instancia de player
    // y setea el estado PlayingSong a true
    playerPlay(){
        this.player.playerPlay();
        this.setState({PlayingSong: true})
    }
    // pausa intancia de player
    playerPause(){
        this.player.playerPause();
    }

    // muestra visualPlayer
    showVisualPlayer(){
        this.setState({ VisualPlayerOn: true})
    }

    // ocualta visualPlayer
    hideVisualPlayer(){
        this.setState({ VisualPlayerOn: false})
    }

    
    timeTrigger(time){
        this.setState({timePlayed: time})
    }


    render() {
        return (
            <div id="app">
                <Home 
                    songInfo={this.playerLoad.bind(this)}
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

                <AudioPlayer onRef={ref => (this.player = ref)} getTimePlayed={this.timeTrigger.bind(this)}/>

                <ReactCSSTransitionGroup
                    transitionName="vp"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>

                    {
                        this.state.VisualPlayerOn
                        ? <VisualPlayer 
                            title={this.state.songPlayedInfo.songTitle} 
                            image={ this.state.songPlayedInfo.songImg} 
                            playerState={this.state.PlayingSong} 
                            onClickBackVp={this.hideVisualPlayer.bind(this)} 
                            onClickPlay={this.playerPlay.bind(this)}
                            onClickPause={this.playerPause.bind(this)}
                            timeLineCount= {this.state.timePlayed}                
                        />
                        : null
                    }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App;