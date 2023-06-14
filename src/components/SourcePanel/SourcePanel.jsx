import React from 'react'
import './style.scss'
import newWindowSvg from "../../assets/images/icon-new-window.svg"

export default function SourcePanel({ keyWord }) {
    return (
        <div>
            <div className='source-line'></div>
            <div className='source-link'>
                <h2>Source</h2>
                <a href={`https://en.wiktionary.org/wiki/${keyWord}`}>{`https://en.wiktionary.org/wiki/${keyWord}`}</a>
                <img src={newWindowSvg} alt="nova pagina" />
            </div>
        </div>
    )
}
