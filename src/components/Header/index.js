import React from 'react'
import NavbarBottom from '../NavbarBottom';
import NavbarTop from '../NavbarTop'
import './index.css';

function Header() {
    return (
        <div className="header">
            <NavbarTop/>
            <NavbarBottom/>
        </div>
    )
}

export default Header
