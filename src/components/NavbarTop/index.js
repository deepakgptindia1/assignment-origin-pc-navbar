import React from 'react';
import './index.css';
function NavbarTop() {
    return (
        <>
            <div className="navbar-top">
                <div className="navbar-top-container">
                    <ul className="container-left">
                        <li><i className="fas fa-shield-alt"></i>24/7 Lifetime Support </li>
                        <li><i className="fas fa-phone"></i>1-877-674-4460 (US & CA) </li>
                    </ul>
                    <ul className="container-right">
                        <a href="#"><li><i className="far fa-comment"></i>Chat Offline</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavbarTop
