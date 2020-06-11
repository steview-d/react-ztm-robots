import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        };

        // arrow func with handleChange removes the need to bind 'this'
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;
        // This is same as:
        // const monsters = this.state.monsters - and same again for searchField

        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        /* jshint ignore:start */
        return (
            <div className='App'>
                <h1>Robots Rolodex</h1>
                <SearchBox
                    placeholder='search robots'
                    handleChange={this.handleChange}
                />
                {/*
                    monsters is a props object that is being
                    passed to CardList component.
                */}
                <CardList monsters={filteredMonsters} />
            </div>
        );
        /* jshint ignore:end */
    }
}

export default App;
