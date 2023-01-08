import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [ searchField,setSearchField] = useState('')
  const [monsters,setMonsters] = useState([])
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
    .catch(error => {
      console.log(error,'hi')
    })
  }, [])
  
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField))
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])
  

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
    <h1 className='app-title'>Monster Rolodex</h1>
    <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box"/>
    <CardList monsters={filteredMonsters} />
  </div>
  )
}


export default App;
