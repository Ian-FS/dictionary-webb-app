import React from 'react'
import './style.scss'

export default function SourcePanel({ keyWord }) {
    return (
        <div>
            <div className='source-line'></div>
            <div className='source-link'>
                <h2>Source
                    <a href={`https://en.wiktionary.org/wiki/${keyWord}`}>{`https://en.wiktionary.org/wiki/${keyWord}`}</a>
                    <img src="/src/assets/images/icon-new-window.svg" alt="nova pagina" />
                </h2>
            </div>
        </div>
    )
}
