import React from 'react'
import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Panel from './components/Panel/Panel'
import useAxios from './hooks/use-axios'
import dictionaryInstance from './helper/axios-instance'



function App() {
  const [inputValue, setInputValue] = useState("car")


  const [data, isSearch, setIsSearch] = useAxios({
    axiosInstance: dictionaryInstance,
    method: 'get',
    url: inputValue,
  })

  console.log(data.meanings[0].definitions)

  return (
    <div className='container'>
      <Header />
      <SearchBar
        keyWord={data.word}
        inputValue={"car"}
        setInputValue={setInputValue}
        setIsSearch={setIsSearch}
      />
      <Panel keyWord={data} definitions={data.meanings[0].definitions} />
    </div>
  )
}

export default App
