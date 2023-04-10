import React from 'react'
import './navbar.css'
import { useState } from 'react'
import logo from '../../assets/NCSA_Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EnterHour from '../enterhours/EnterHour'
import OfficerPortal from '../officerportal/OfficerPortal'
import ViewHour from '../viewhours/ViewHour'

const NavBar = () => {
    const [hamburgerState, setHamburgerState] = useState('hamburger_passive');
    const [navState, setNavState] = useState("navbar_passive");
    
    function showNav() {
        if(hamburgerState === "hamburger_passive") {
            setHamburgerState('hamburger_active');
            setNavState("navbar_active");
        }
        else {
            setHamburgerState('hamburger_passive');
            setNavState("navbar_passive");
        }
                    
    }
    
    return (
            <section id='nav'>
                <div className="navbar__container">
                    <div className="navbar__icon">
                        <img src={logo} className="navbar__image" alt="logo" />
                    </div>
                    <h2>NCSA Lab Hours Manager</h2>
                
                    <nav className={navState}> 
                        <a>
                            <Link to="/" className={hamburgerState} onClick={showNav}>  <GiHamburgerMenu /> </Link>
                        </a>
                        <ul>
                            <a>
                                <Link to="/enterhour" className='links'> Enter Hours </Link>
                            </a>
                            <a>
                                <Link to="/viewhour" className='links'> View Hours </Link>
                            </a>
                            <a>
                                <Link to="/officerportal" className='links'> Officer Portal </Link>
                            </a>
                            <a>
                                <Link to="/" className='links'>  Sign Out </Link>
                            </a>
                        </ul>
                    </nav>
                </div>
                <hr className="accent"/>
            </section>
    )
}

export default NavBar;