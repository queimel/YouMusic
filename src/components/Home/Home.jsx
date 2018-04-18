import React, { Component } from 'react';
import Search from '../search/search'
import SearchList from '../searchList/SearchList'
import './Home.scss'
import fetch from 'node-fetch';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songItems : [],
            isLastSearch: false
        }
    }
    
    componentDidMount(){
        this.setState({playerState: this.props.showMiniPlayer});
        this.checkSongList();
    }
    /* comprueba el estado 'isLastSearch' para determinar sidebe llenar el array songItems
    con las ultimas busquedas o dejarlo vacio */
    checkSongList(){
        let lastSearchesBox = this.lastSearchedItems();
        this.setState({
            songItems: lastSearchesBox,
            isLastSearch: !!lastSearchesBox.length
        });
    }


    handleApiQuery(e) {
        let terms = e.target.value;

        this.getVideos(terms).then((videos) => {
            
                const { items } = videos

                let videosArray =  items.map(function(item){
                    return {
                        "songId": item.id.videoId,
                        "songTitle": item.snippet.title,
                        "songImg": item.snippet.thumbnails.medium.url                        
                    }
                })
                this.setState({ 
                    songItems: videosArray,
                    isLastSearch: false
                })
            })
    }


    lastSearchedItems(){
        return JSON.parse(localStorage.getItem("latestSearches")) || [];
    }
    getVideos(terms) {
        const ApiKey = 'AIzaSyAUd28jjI7Xv_jB4wypxv-BiUPd6GHBeiA'
        let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${ApiKey}&q=${terms}&part=snippet,id&order=viewCount&maxResults=10&type=video`
        return fetch(endpoint)
            .then((response) => {
                return response.json()
            })
    } 

    setVideoSelected(videoId){
     
        let song = this.state.songItems[videoId]
        this.props.songInfo(song)
        
    }
    
    render() {

        return (
            <div id="home">
                <header>
                    <Search onSearch ={ this.handleApiQuery.bind(this)}/>
                </header>
                <section id="results">
                    {this.state.isLastSearch ? <h3>Tus ultimas busquedas</h3> : null}
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