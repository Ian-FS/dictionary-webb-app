import React from 'react'
import './style.scss'

export default function WordPanel({ keyWord }) {

    console.log()

    return (
        <div className='word-panel'>
            <div>
                <h1>{keyWord.word}</h1>
                <p>{keyWord.phonetics[1].text}</p>
            </div >
            <div className='play'>
                <img src="/src/assets/images/icon-play.svg" alt="Play" onClick={() => { document.getElementById("audio-play").play() }} />
                <audio id="audio-play" src={keyWord.phonetics[0].audio} ></audio>
            </div>
        </div>
    )
}
