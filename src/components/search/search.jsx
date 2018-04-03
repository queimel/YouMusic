import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div id="search">
                <form action=''>
                    <article class='input'>
                        <input type='input' name='search'  placeholder='buscar'/>
                    </article>
                    <button type="submit">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;
