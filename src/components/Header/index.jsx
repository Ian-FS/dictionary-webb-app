import React from "react";
import './style.scss'

function Header() {
    return (
        <>
            <header>
                <div className="left-head">
                    <img src="./src/assets/images/logo.svg" alt="livro" />
                </div>
                <div className="right-head">
                    <div className="font-type">
                        <h2>Sans Serif</h2>
                        <img src="/src/assets/images/icon-arrow-down.svg" alt="seta para baixo" />
                    </div>
                    <div className="line-vertical"></div>
                    <div className="mode-theme">
                        <div><i></i></div>
                        <img src="/home/ians/dictionary-web-app/src/assets/images/icon-moon.svg" alt="" />
                    </div>

                </div>
            </header>
        </>
    )
}
export default Header