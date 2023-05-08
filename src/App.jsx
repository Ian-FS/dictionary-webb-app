import React from 'react'
import { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Panel from './components/Panel/Panel'
import axiosInstance from './helper/axios-instance'



function App() {
  const [inputValue, setInputValue] = useState("dictionary")
  const [keyWord, setKeyWord] = useState({})
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    isSearch
    axiosInstance
      .get(inputValue)
      .then((res) => {
        setKeyWord(...res.data)
      }).catch((error) => console.log(error.message)).finally(setIsSearch(false))
  }, [isSearch])

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
