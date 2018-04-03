import React, { Component } from 'react';

class SearchList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <div class='info'>
                            <div class='img'>
                                <img src='https://picsum.photos/300/250' />
                            </div>
                            <div class='txt'>
                                <p>Nombre del artista</p>
                                <span>Titulo de la canción</span>
                            </div>
                        </div>
                        <div class='action'>
                            <i class='fas fa-ellipsis-v fa-lg'></i>
                        </div>
                    </li>
                    <li>
                        <div class='info'>
                            <div class='img'>
                                <img src='https://picsum.photos/300/250' />
                            </div>
                            <div class='txt'>
                                <p>Nombre del artista</p>
                                <span>Titulo de la canción</span>
                            </div>
                        </div>
                        <div class='action'>
                            <i class='fas fa-ellipsis-v fa-lg'></i>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SearchList;