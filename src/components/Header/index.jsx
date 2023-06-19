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
                            event.target.nextSibling.classList.toggle("img-toggle")
                            console.log(event.target.classList.toggle("div-toggle"))
                            if (event.target.classList.toggle("div-toggle")) {
                                document.documentElement.style.setProperty('--background-primary', '#050505');
                                document.documentElement.style.setProperty('--background-secondary', '#1f1f1f');
                                document.documentElement.style.setProperty('--color-primary', '#ffffff');
                                document.documentElement.style.setProperty('--line-backgroundColor', '#3a3a3a');
                            }

                        }}><i></i></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" /></svg>
                        {/* <img src={moonSvg} alt="" /> */}
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header