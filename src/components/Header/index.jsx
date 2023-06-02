import React from "react";
import './style.scss';
import arrowSvg from '../../assets/images/icon-arrow-down.svg'
import logoSvg from '../../assets/images/logo.svg'
import moonSvg from '../../assets/images/icon-moon.svg'

function Header() {
    return (
        <>
            <header>
                <div className="left-head">
                    <img src={logoSvg} alt="livro" />
                </div>
                <div className="right-head">
                    <div className="font-type">
                        <h2>Sans Serif</h2>
                        <img src={arrowSvg} alt="seta para baixo" />
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