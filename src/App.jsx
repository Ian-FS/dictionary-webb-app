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


  const [data, setResearched, loading] = useAxios({
    axiosInstance: dictionaryInstance,
    method: 'get',
    url: inputValue,
  })

  const handleChange = (event) => {
    const { value } = event.target
    setInputValue(value)
  }
  const handleKeyUp = (event) => (event.key === "Enter" && inputValue !== data[0]?.word)
    && setResearched(false)

  // console.log(data[0].meanings[0])

  const handleClick = () => (inputValue !== data[0]?.word)
    && setResearched(false)

  // console.log(data[0]?.phonetics[1]?.text)
  // console.log(data[0]?.word)
  if (loading) {
    return <span>Carregando</span>
  }

  return (
    <div className='container' >
      <Header />
      <SearchBar
        inputValue={inputValue}
        handleChange={handleChange}
        handleKeyUp={handleKeyUp}
        handleClick={handleClick}
        setResearched={setResearched}
      />
      <Panel data={data[0]} />
    </div>
  )
}

export default App
