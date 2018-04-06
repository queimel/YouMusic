import React, { Component } from 'react';
import FontAwesome, { FontawesomeObject } from '@fortawesome/fontawesome';
import { faHeadphones, faPlay } from '@fortawesome/fontawesome-free-solid';

class MiniPlayer extends Component {
    render() {
        return (
            <div id="miniplayer">
                <div className="img">
                    <img src="https://picsum.photos/100/100" alt=""/>
                </div>
                <div className="info">
                    <p className="green"><i className="fas fa-headphones"></i>Ahora Escuchas</p>
                    <p className="title">Nombre de la cancion</p>      
                </div>
                <div className="actions">
                    <button><i className="fas fa-play fa-2x"></i> </button>  
                </div>
            </div>
        );
    }
}

export default MiniPlayer;