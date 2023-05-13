import React from 'react'
import './style.scss'

export default function SearchBar({ handleChange, inputValue, handleKeyUp, handleClick }) {

    return (
        <div className='search-bar'>
            <input type="text" value={inputValue} onChange={handleChange} onKeyUp={handleKeyUp} />
            <img className='lupa' src="/src/assets/images/icon-search.svg" alt="pesquisar" onClick={handleClick} />
        </div>
    )
}
