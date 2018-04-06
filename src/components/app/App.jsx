import React, { Component } from 'react';
import Search from '../search/search'
import SearchList from '../searchList/SearchList'
import AudioPlayer from '../audioplayer/AudioPlayer'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoItems : [],
            keywords: '',
            videoSelected: '',
            playerState: false
        }


    }

    handleApiQuery(e) {
        let terms = e.target.value;
        const ApiKey = 'AIzaSyAUd28jjI7Xv_jB4wypxv-BiUPd6GHBeiA'

        let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${ApiKey}&q=${terms}&part=snippet,id&order=date&maxResults=10`

        // https://www.googleapis.com/youtube/v3/search?key=AIzaSyAUd28jjI7Xv_jB4wypxv-BiUPd6GHBeiA&q="dogs and cats"&part=snippet,id&order=date&maxResults=10
        
        fetch(endpoint)
            .then((response) => {
                return response.json()
            })
            .then((videos) => {
                this.setState({ videoItems: videos.items })
            })
    }

    setVideoSelected(videoId){
        this.setState({videoSelected: videoId});
        this.setState({playerState:true})

        this.child.onYouTubeReady(videoId);
    }
    
    render() {
        return (
            <div>
                <header>
                    <Search onSearch ={ this.handleApiQuery.bind(this)}/>
                </header>
                <section id="results">
                    <SearchList results = {this.state.videoItems} onClickedVideo={this.setVideoSelected.bind(this)}/>
                    
                    <AudioPlayer videoId = {this.state.videoSelected} playerState={this.state.playerState} onRef={ref => (this.child = ref)}/>
                </section>
            </div>
        );
    }
}

export default App;