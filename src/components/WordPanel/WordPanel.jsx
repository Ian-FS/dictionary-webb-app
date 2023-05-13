import React from 'react'
import './style.scss'

export default function WordPanel({ keyWord }) {
    return (
        <div className='word-panel'>
            <div>
                <h1>{keyWord?.word}</h1>
                <p>{keyWord?.phonetics[1]?.text}</p>
            </div >
            <div>
                <img src="/src/assets/images/icon-play.svg" alt="Play" />
            </div>
        </div>
    )
}
