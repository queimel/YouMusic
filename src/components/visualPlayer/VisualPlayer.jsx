import React, { Component } from 'react';
import '../../scss/variables.scss'
import './VisualPlayer.scss'
import FontAwesome, { FontawesomeObject } from '@fortawesome/fontawesome';
import { faHeadphones, faPlay, faPlayCircle, faPause } from '@fortawesome/fontawesome-free-solid';
class VisualPlayer extends Component {

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
            <div id="visualPlayer">
                <header>
                    <h1>
                        <span><i className="fas fa-headphones"></i></span>
                        Ahora escuchas</h1>

                    <button>
                        <i className="fas fa-ellipsis-v fa-lg"></i>
                    </button>
                </header>
                <section id="player">
                    <div id="song">
                        <div className="img">
                            <img src={this.props.image} alt="" />
                            <div className="time-line">
                                <span className="progress"></span>
                            </div>
                        </div>


                        <div className="song-info">
                            <h2 className="title">{this.props.title}</h2>
                            {/*<p className="artist">Yolito y su combo</p>}*/}
                        </div>
                    </div>

                    <div className="controls">

                        <ul>
                            <li>
                                <button>
                                    <i className="fas fa-random "></i>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="fas fa-backward fa-lg"></i>
                                </button>
                            </li>
                            <li>
                                {this.state.paused === false
                                    ?  <i className="fas fa-pause-circle fa-2x"></i> 
                                    : null
                                }
                                {this.state.paused === true
                                    ? <button onClickCapture={this.handlePlayClick.bind(this)}><i className="fas fa-play-circle fa-2x"></i></button>
                                    : null
                                } 
                            </li>
                            <li>
                                <button>
                                    <i className="fas fa-forward fa-lg"></i>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="fas fa-redo "></i>
                                </button>
                            </li>
                        </ul>

                    </div>
                </section>
            </div>
        );
    }
}

export default VisualPlayer;