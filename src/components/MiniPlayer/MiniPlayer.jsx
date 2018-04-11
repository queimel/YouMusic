import React, { Component } from 'react';
import FontAwesome, { FontawesomeObject } from '@fortawesome/fontawesome';
import { faHeadphones, faPlay, faPlayCircle } from '@fortawesome/fontawesome-free-solid';
import '../../scss/variables.scss'
import './MiniPlayer.scss'


class MiniPlayer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            paused: false
        }
    }
    
    handlePauseClick(e){
        e.stopPropagation();
        this.props.onClickPause();
        this.setState({paused: true})
    }

    handlePlayClick(e){
        e.stopPropagation();
        this.props.onClickPlay();
        this.setState({paused: false})
    }

    render() {
        return (
            <div id="miniplayer">
                <div className="img">
                    <img src={this.props.image} alt=""/>
                </div>
                <div className="info">
                    <p className="green"><i className="fas fa-headphones"></i>Ahora Escuchas</p>
                    <div>
                        <p className="title">{this.props.title}</p>
                    </div>      
                </div>
                <div className="actions">
                
                        {this.state.paused === false
                            ? <button onClickCapture={this.handlePauseClick.bind(this)}> <i className="fas fa-pause-circle fa-2x"></i> </button>
                            : null
                        }
                        {this.state.paused === true
                            ? <button onClickCapture={this.handlePlayClick.bind(this)}><i className="fas fa-play-circle fa-2x"></i></button>
                            : null
                        }                        
                      
                </div>
            </div>
        );
    }
}

export default MiniPlayer;