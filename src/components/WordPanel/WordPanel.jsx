import React from 'react'
import './style.scss'

export default function WordPanel({ word }) {
    return (
        <div className='word-panel'>
            <div>
                <h1>{word}</h1>
                <p>cksnakncakcn</p>
            </div >
            <div>
                <img src="/src/assets/images/icon-play.svg" alt="Play" />
            </div>
        </div>
    )
}
