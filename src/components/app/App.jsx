import React, { Component } from 'react';
import Search from '../search/search'
import SearchList from '../searchList/SearchList'

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Search />
                </header>
                <section id="results">
                    <SearchList />
                </section>
            </div>
        );
    }
}

export default App;