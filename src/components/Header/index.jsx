import React from "react";
import './style.scss';
import logoSvg from '../../assets/images/logo.svg'
import moonSvg from '../../assets/images/icon-moon.svg'

function Header({ setFont }) {

    const typesFonts = ['Sans Serif', 'Serif', 'Mono']

    const handleChange = (event) => {
        if (event.target.value === 'Sans Serif') setFont({ fontFamily: "Inter, Sans Serif" })
        if (event.target.value === 'Serif') setFont({ fontFamily: "Lora, Serif" })
        if (event.target.value === 'Mono') setFont({ fontFamily: "Inconsolata, Monospace" });
    }

    return (
        <>
            <header>
                <div className="left-head">
                    <img src={logoSvg} alt="livro" />
                </div>
                <div className="right-head">
                    <div className="font-type">
                        <select onChange={handleChange} name="types-fonts" id="types-fonts" >
                            {
                                typesFonts.map((font) => <option className="option" value={font} key={font}>{font}</option>)
                            }
                        </select>
                    </div>
                    <div className="line-vertical"></div>
                    <div className="mode-theme">
                        <div onClick={(event) => {
                            event.target.lastChild.classList.toggle("i-toggle")
                            event.target.classList.toggle("div-toggle")
                        }}><i></i></div>
                        <img src={moonSvg} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header