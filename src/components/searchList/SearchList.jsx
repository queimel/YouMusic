import React, { Component } from 'react';

class SearchList extends Component {


    render() {
        let items = this.props.results;
        return (
            <div>
                <ul>
                {items.map(item => 
                    <li>
                        <div className='info'>
                            <div className='img'>
                                <img src={item.snippet.thumbnails.medium.url}i />
                            </div>
                            <div className='txt'>
                                <p>{item.snippet.title}</p>
                                <span>{item.snippet.channelTitle}</span>
                            </div>
                        </div>
                        <div className='action'>
                            <i className='fas fa-ellipsis-v fa-lg'></i>
                        </div>
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default SearchList;