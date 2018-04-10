import React, { Component } from 'react';
import Home from '../Home/Home';
import AudioPlayer from '../audioplayer/AudioPlayer'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedSongTitle: '',
            PlayingSong: false       
        }
    }

    playerControl(songInfo){

        let songId = songInfo.id.videoId;
        let songTitle = songInfo.snippet.title;

        this.player.onYouTubeReady(songId);

        this.setState({selectedSongTitle: songTitle, PlayingSong: true})
    }

    render() {
        return (
            <div>
                <Home 
                    songInfo={this.playerControl.bind(this)} 
                    title={this.state.selectedSongTitle} 
                    showMiniPlayer={this.state.PlayingSong}
                />
                
                <AudioPlayer onRef={ref => (this.player = ref)} />
            </div>
        );
    }
}

export default App;