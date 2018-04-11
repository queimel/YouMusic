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
            songTitle: '',
            songImg: '',
            VisualPlayerOn: ''
        }
    }

    

    playerLoad(songInfo){

        let song = songInfo
        let songId = song.id.videoId;
        this.player.onYouTubeReady(songId);
        this.setState(
            { 
                PlayingSong: true,
                songTitle: song.snippet.title,
                songImg: song.snippet.thumbnails.high.url
            }
        )

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
                />
                <ReactCSSTransitionGroup
                    transitionName="mp"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    
                    {this.state.PlayingSong
                        ? <MiniPlayer 
                            title={this.state.songTitle} 
                            image={ this.state.songImg} 
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