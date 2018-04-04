import React, { Component } from 'react';
import FontAwesome, { FontawesomeObject } from '@fortawesome/fontawesome';
import { faSyncAlt } from '@fortawesome/fontawesome-free-solid';

class Search extends Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div id="search">
                <form action=''>
                    <article className='input'>
                        <input type='input' name='search'  placeholder='buscar' onKeyUp={this.props.onSearch }/>
                    </article>
                    <button type="submit">
                        <i className="fas fa-sync-alt"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;
