import React from "react";
import './style.scss';
import logoSvg from '../../assets/images/logo.svg'
import moonSvg from '../../assets/images/icon-moon.svg'

function Header({ setFont }) {

    const typesFonts = ['Sans Serif', 'Serif', 'Mono']
    const handleChange = (event) => setFont({ fontFamily: event.target.value.toLowerCase() })

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
                        <div><i></i></div>
                        <img src={moonSvg} alt="" />
                    </div>

                </div>
            </header>
        </>
    )
}
export default Header