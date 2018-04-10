import React, { Component } from 'react';
import Home from '../Home/Home';
import AudioPlayer from '../audioplayer/AudioPlayer'
import MiniPlayer from '../MiniPlayer/MiniPlayer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            PlayingSong: false,
            songTitle: '',
            songImg: ''
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

    render() {
        return (
            <div>
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
                            onClickPause={this.playerPause.bind(this)}
                            /> 
                        : '' }  
                </ReactCSSTransitionGroup>                     
                <AudioPlayer onRef={ref => (this.player = ref)} />
            </div>
        );
    }
}

export default App;