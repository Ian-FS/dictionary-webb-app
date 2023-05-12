import React from 'react'
import './style.scss'

export default function MeaningPanel({ wordType, definitions }) {
    return (
        <div className='noum-panel'>
            <div className='noum'>
                <h2>{wordType}</h2>
                <div></div>
            </div>
            <div className='meaning'>
                <h2>Meaning</h2>
                <ul>
                    {
                        definitions.map((definition) => {
                            <li>
                                {definition}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
