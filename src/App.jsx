import React from 'react'
import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Panel from './components/Panel/Panel'
import axios from 'axios'
import { useEffect } from 'react'



function App() {
  const palavra = "car"
  const [palavraChave, setPalavraChave] = useState("")

  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`)
      .then((res) => {
        console.log(res.data)
        setPalavraChave(res.data[0].word)
      }).catch((error) => console.log(error))
  }, [])

  return (
    <div className='container'>
      <Header />
      <SearchBar />
      <Panel word={palavraChave} />
    </div>
  )
}

export default App
