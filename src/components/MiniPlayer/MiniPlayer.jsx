import React, { Component } from 'react';
import FontAwesome, { FontawesomeObject } from '@fortawesome/fontawesome';
import { faHeadphones, faPlay, faPlayCircle } from '@fortawesome/fontawesome-free-solid';
import '../../scss/variables.scss'
import './MiniPlayer.scss'


class MiniPlayer extends Component {
    constructor(props) {
        super(props);
    }
    
    handleClick(e){
        e.stopPropagation();
        this.props.onClickMp();
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
                    <button onClickCapture={this.handleClick.bind(this)}>
                        <i className="fas fa-play-circle fa-2x"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default MiniPlayer;