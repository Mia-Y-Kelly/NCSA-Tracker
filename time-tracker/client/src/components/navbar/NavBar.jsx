import React from 'react'
import './navbar.css'
import { useState } from 'react'
import logo from '../../assets/NCSA_Logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <section id='nav'>
            <div className="container navbar__container">
                <div className="navbar__icon">
                    <img src={logo} className="navbar__image" alt="logo" />
                </div>
                <h2>NCSA Lab Hours Manager</h2>
                <nav>
                    <a href='#enterhours' onClick={() => setActiveNav('')} className={activeNav === '#' ? 'active' : ''}> Enter Hours</a>
                    <a href='#viewhours' onClick={() => setActiveNav('')} className={activeNav === '#' ? 'active' : ''}> View Hours</a>
                    <a href='#portol' onClick={() => setActiveNav('')} className={activeNav === '#' ? 'active' : ''}> Officer Portal</a>
                    <a href='#signout' onClick={() => setActiveNav('')} className={activeNav === '#' ? 'active' : ''}> Sign Out</a>
                    <a href='#' onClick={ () => setActiveNav('#')} className="hamburger__icon"> <GiHamburgerMenu /> </a>
                </nav>
            </div>
        </section>
    )
}

export default NavBar;