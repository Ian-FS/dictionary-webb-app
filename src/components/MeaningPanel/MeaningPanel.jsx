import React from 'react'
import './style.scss'

export default function MeaningPanel({ wordType }) {
    return (
        <div className='noum-panel'>
            <div className='noum'>
                <h2>{wordType}</h2>
                <div></div>
            </div>
            <div className='meaning'>
                <h2>Meaning</h2>
                <ul>
                    <li></li>
                    <p></p>
                </ul>
            </div>
        </div>
    )
}
