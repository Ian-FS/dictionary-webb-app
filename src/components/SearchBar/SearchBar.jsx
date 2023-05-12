import React from 'react'
import './style.scss'

export default function SearchBar({ handleChange, inputValue, keyWord }) {






    return (
        <div className='search-bar'>
            <input type="text" value={inputValue} onChange={handleChange} onKeyUp={(event) => (event.key === "Enter" && inputValue !== keyWord[0].word) && setIsSearch(true)} />
            <img className='lupa' src="/src/assets/images/icon-search.svg" alt="pesquisar" onClick={() => (inputValue !== keyWord[0].word) && setIsSearch(true)} />
        </div>
    )
}
