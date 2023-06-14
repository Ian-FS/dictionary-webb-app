import React from 'react'
import './style.scss'
import playSvg from "../../assets/images/icon-play.svg"

export default function WordPanel({ keyWord }) {
    const newPhonetics = keyWord.phonetics.filter(phonetic => phonetic.audio !== '')

    return (
        <div className='word-panel'>
            <div>
                <h1>{keyWord.word}</h1>
                {(newPhonetics[2] === undefined) && <p>{newPhonetics[1]?.text}</p>}
                {(newPhonetics[2] !== undefined) && <p>{newPhonetics[2]?.text}</p>}
            </div >
            <div className='play'>
                <img
                    src={playSvg}
                    alt="Play"
                    onClick={() => { document.getElementById("audio-play").play() }}
                />
                {(newPhonetics.length < 3 && newPhonetics[1] !== undefined) && <audio id="audio-play" src={newPhonetics[1]?.audio} ></audio>}
                {(newPhonetics[2] !== undefined) && <audio id="audio-play" src={newPhonetics[2]?.audio} ></audio>}
            </div>
        </div>
    )
}
