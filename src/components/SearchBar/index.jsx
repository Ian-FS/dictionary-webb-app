import React from 'react'
import './style.scss'

export default function SearchBar({ handleInput }) {
    return (
        <div>
            <input placeholder='Pesquise aqui...' type="text" onChange={() => handleInput} />
        </div>
    )
}
