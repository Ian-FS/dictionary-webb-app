import React from "react";
import './style.scss'

function Header() {
    return (
        <>
            <header>
                <div>
                    <img src="/src/assets/images/logo.svg" alt="livro" />
                </div>
                <div>
                    <h2></h2>
                    <div className="mode-theme">
                        <div><i></i></div>
                        <img src="/src/assets/images/icon-moon.svg" alt="" />
                    </div>

                </div>
            </header>
        </>
    )
}
export default Header