import React from 'react'
import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

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
    </div>
  )
}

export default App
