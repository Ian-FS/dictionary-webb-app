import React from 'react'
import './style.scss'

export default function SearchBar({ setInputValue, inputValue, setIsSearch, keyWord }) {

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className='search-bar'>
            <input type="text" value={inputValue} onChange={() => handleChange} onKeyUp={(event) => (event.key === "Enter" && inputValue !== keyWord.word) && setIsSearch(true)} />
            <img className='lupa' src="/src/assets/images/icon-search.svg" alt="pesquisar" onClick={() => (inputValue !== keyWord.word) && setIsSearch(true)} />
        </div>
    )
}
