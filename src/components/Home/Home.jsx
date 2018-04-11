import React, { Component } from 'react';
import Search from '../search/search'
import SearchList from '../searchList/SearchList'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoItems : [],
            keywords: ''
        }


    }
    componentDidMount(){
        this.setState({playerState: this.props.showMiniPlayer})
    }

    handleApiQuery(e) {
        let terms = e.target.value;
        const ApiKey = 'AIzaSyAUd28jjI7Xv_jB4wypxv-BiUPd6GHBeiA'

        let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${ApiKey}&q=${terms}&part=snippet,id&order=viewCount&maxResults=10&type=video`

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
     
        let song = this.state.videoItems[videoId]
        this.props.songInfo(song)
        
    }
    
    render() {
        return (
            <div>
                <header>
                    <Search onSearch ={ this.handleApiQuery.bind(this)}/>
                </header>
                <section id="results">
                    <SearchList results = {this.state.videoItems} onClickedVideo={this.setVideoSelected.bind(this)}/>
                </section>
            </div>
        );
    }
}

export default Home;