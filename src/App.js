import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/Header';
import Search from './components/Search';
import SearchResult from './components/SearchResult'

function App() {
  const [ search, setSearch ] = useState(null);
  const [ result, setResult] = useState(null)

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch('https://pokeapi.co/api/v2/pokemon/'+search)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setResult(response)
    })
  }

  const handleChange= (e) =>{
    setSearch(e.target.value)
    console.log(search)
  }


  return (
    <div className="App">
      <Header></Header>
      <Search handleSubmit={handleSubmit} handleChange={handleChange}></Search>
      <SearchResult result={result}></SearchResult>
    </div>
  );
}

export default App;
