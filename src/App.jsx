import React from 'react'
import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Panel from './components/Panel/Panel'
import axios from 'axios'
import { useEffect } from 'react'

const palavra = "car"

function App() {

  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`).then((res) => {
      console.log(res.data)
      const word = res.data[0].word

    })
  })

  return (
    <div className='container'>
      <Header />
      <SearchBar />
      <Panel word={word} />
    </div>
  )
}

export default App
