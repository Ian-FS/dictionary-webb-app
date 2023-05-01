import React from 'react'
import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Panel from './components/Panel/Panel'

function App() {

  const [onChangeInput, setOnChangeInput] = useState("Carregando")

  const handleInput = (event) => {
    setOnChangeInput(event.target.value)
    return console.log(onChangeInput)
  }

  return (
    <div className='container'>
      <Header />
      <SearchBar handleInput={handleInput} />
      <Panel />
    </div>
  )
}

export default App
