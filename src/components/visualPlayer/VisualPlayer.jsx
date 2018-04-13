import React, { Component } from 'react';
import '../../scss/variables.scss'
import './VisualPlayer.scss'
import FontAwesome, { FontawesomeObject } from '@fortawesome/fontawesome';
import { faHeadphones, faPlay, faPlayCircle, faPause } from '@fortawesome/fontawesome-free-solid';
class VisualPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            play: false
        }        
    }
    handleClickBack(e){
        e.stopPropagation();
        this.props.onClickBackVp();
    }

    play(){

        if(this.state.play === true){
            this.setState({play: false})
            this.props.onClickPause()
        }else{
            this.setState({play: true})
            this.props.onClickPlay()
        }

        console.log(this.state.play)
    }

    render() {
        return (
            <div id="visualPlayer">
                <header>
                    <h1>
                        <span><i className="fas fa-headphones"></i></span>
                        Ahora escuchas</h1>

                    <button onClickCapture={this.handleClickBack.bind(this)}>
                        <i className="fas fa-arrow-circle-left fa-lg"></i>
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
                        </div>
                    </div>
                </section>
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
                            <button onClick={this.play.bind(this)} className={!this.state.play === true ? 'btn-play-pause pause' : 'btn-play-pause play'}></button>
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
            </div>
        );
    }
}

export default VisualPlayer;