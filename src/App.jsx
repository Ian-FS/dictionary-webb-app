import React from 'react'
import { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Panel from './components/Panel/Panel'
import axiosInstance from './helper/axios-instance'



function App() {
  const [inputValue, setInputValue] = useState("dictionary")
  const [keyWord, setKeyWord] = useState()
  const [wordMeanings, setWordMeanings] = useState([])
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    isSearch
    axiosInstance
      .get(inputValue)
      .then((res) => {
        setKeyWord(...res.data)
        console.log(...res.data)

      }).catch((error) => console.log(error)).finally(setIsSearch(false))
  }, [isSearch])

  // console.log(keyWord.meanings[0].definitions)

  return (
    <div className='container'>
      <Header />
      <SearchBar
        keyWord={keyWord}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsSearch={setIsSearch}
      />
      <Panel keyWord={keyWord} />
    </div>
  )
}

export default App
