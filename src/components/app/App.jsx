import React, { Component } from 'react';
import Home from '../Home/Home';
import AudioPlayer from '../audioplayer/AudioPlayer';

class App extends Component {

    constructor(props) {
        super(props);
    }

    playerControl(songId){
        this.player.onYouTubeReady(songId);
    }

    render() {
        return (
            <div>
                <Home songControl={this.playerControl.bind(this)}/>
                <AudioPlayer onRef={ref => (this.player = ref)}/>
            </div>
        );
    }
}

export default App;