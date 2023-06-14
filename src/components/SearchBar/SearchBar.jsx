import React from 'react'
import './style.scss'
import lupaSvg from "../../assets/images/icon-search.svg"

export default function SearchBar({ handleChange, inputValue, handleKeyUp, handleClick }) {

    return (
        <div className='search-bar'>
            <input type="text" value={inputValue} onChange={handleChange} onKeyUp={handleKeyUp} />
            <img className='lupa' src={lupaSvg} alt="pesquisar" onClick={handleClick} />
        </div>
    )
}
