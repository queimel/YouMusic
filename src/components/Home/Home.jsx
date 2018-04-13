import React, { Component } from 'react';
import Search from '../search/search'
import SearchList from '../searchList/SearchList'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songItems : []
        }


    }
    componentDidMount(){
        this.setState({playerState: this.props.showMiniPlayer})

        if(this.state.songItems === null){
            this.setState({list: this.lastSearches() })
        }

        console.log(this.state.songItems)

    }

    lastSearches(){
        return JSON.parse(localStorage.getItem("latestSearches"));
    }

    handleApiQuery(e) {
        let terms = e.target.value;
        const ApiKey = 'AIzaSyAUd28jjI7Xv_jB4wypxv-BiUPd6GHBeiA'

        let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${ApiKey}&q=${terms}&part=snippet,id&order=viewCount&maxResults=10&type=video`
        
        fetch(endpoint)
            .then((response) => {
                return response.json()
            })
            .then((videos) => {
                const { items } = videos
                let videosArray =  items.map(function(item){
                    return {
                        "songId": item.id.videoId,
                        "songTitle": item.snippet.title,
                        "songImg": item.snippet.thumbnails.medium.url                        
                    }
                })

                this.setState({ songItems: videosArray })
            })
    }

    setVideoSelected(videoId){
     
        let song = this.state.songItems[videoId]
        console.log(song)
        this.props.songInfo(song)
        
    }
    
    render() {

        return (
            <div id="home">
                <header>
                    <Search onSearch ={ this.handleApiQuery.bind(this)}/>
                </header>
                <section id="results">
                    <SearchList 
                    results = {this.state.songItems} 
                    onClickedVideo={this.setVideoSelected.bind(this)}
                />
                </section>
            </div>
        );
    }
}

export default Home;