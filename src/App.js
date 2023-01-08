import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Paschal',
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }
  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField))

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box"/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;