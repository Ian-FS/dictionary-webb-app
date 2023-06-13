import React from "react";
import './style.scss';
import arrowSvg from '../../assets/images/icon-arrow-down.svg'
import logoSvg from '../../assets/images/logo.svg'
import moonSvg from '../../assets/images/icon-moon.svg'
import { useState } from "react";

function Header() {

    const typesFonts = ['Sans Serif', 'Serif', 'Mono']

    return (
        <>
            <header>
                <div className="left-head">
                    <img src={logoSvg} alt="livro" />
                </div>
                <div className="right-head">
                    <div className="font-type">
                        <select name="types-fonts" id="" >
                            {
                                typesFonts.map((font) => <option value={font} key={font}>{font}</option>)
                            }
                        </select>
                    </div>
                    <div className="line-vertical"></div>
                    <div className="mode-theme">
                        <div><i></i></div>
                        <img src={moonSvg} alt="" />
                    </div>

                </div>
            </header>
        </>
    )
}
export default Header