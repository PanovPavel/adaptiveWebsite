import React from "react";
import "bootstrap";
import './header.css'
import Logo from './code.svg'

const Header = ()=>{
    return (
        <>
            <div className={'container'}>
                <header>
                    <div className={'inscription'}>WebDeweloper</div>
                    <div className={`logo`}><img src={Logo}/></div>
                    <menu>
                        <nav><a href={'index.html'}>Home</a></nav>
                        <nav><a>About me</a></nav>
                        <nav><a>Contacts</a></nav>
                    </menu>
                </header>
            </div>
        </>
    )
}
export default Header;