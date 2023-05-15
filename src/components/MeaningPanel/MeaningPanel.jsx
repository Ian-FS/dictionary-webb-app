import React from 'react'
import './style.scss'

export default function MeaningPanel({ wordType, meanings }) {
    return (
        <div className='noum-panel'>
            <div className='noum'>
                <h2>{wordType}</h2>
                <div></div>
            </div>
            <div className='meaning'>
                <h2>Meaning</h2>
                <ul>
                    <li children={meanings?.meanings[0]?.definitions[0]?.definition} />
                    <p children={meanings?.meanings[0]?.definitions[0].example} />
                    <li children={meanings?.meanings[0]?.definitions[1]?.definition} />
                    <p children={meanings?.meanings[0]?.definitions[1].example} />
                    <li children={meanings?.meanings[0]?.definitions[2]?.definition} />
                    <p children={meanings?.meanings[0]?.definitions[2].example} />
                </ul>
            </div>
        </div>
    )
}
