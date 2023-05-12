import React from 'react'
import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Panel from './components/Panel/Panel'
import useAxios from './hooks/use-axios'
import dictionaryInstance from './helper/axios-instance'



function App() {
  const [inputValue, setInputValue] = useState("mother")


  const [data, isSearch, setIsSearch] = useAxios({
    axiosInstance: dictionaryInstance,
    method: 'get',
    url: inputValue,
  })

  const handleChange = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  // console.log(data)

  if (isSearch) {
    return <span>Carregando</span>
  }

  return (
    <div className='container' >
      <Header />
      <SearchBar
        inputValue={inputValue}
        handleChange={handleChange}
        keyWord={data[0]?.word}
      />
      <Panel data={data[0]?.word} />
    </div>
  )
}

export default App
