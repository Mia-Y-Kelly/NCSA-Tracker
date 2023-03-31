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
    const [activeNav, setActiveNav] = useState('#');
    return (
            <section id='nav'>
                <div className="container navbar__container">
                    <div className="navbar__icon">
                        <img src={logo} className="navbar__image" alt="logo" />
                    </div>
                    <h2>NCSA Lab Hours Manager</h2>
                    <nav>
                        <ul>
                            <a>
                                <Link to="/enterhour"> Enter Hours</Link>
                            </a>
                            <a>
                                <Link to="/viewhour">  View Hours </Link>
                            </a>
                            <a>
                                <Link to="/officerportal">  Officer Portal </Link>
                            </a>
                            <a>
                                <Link to="/">  Sign Out </Link>
                            </a>
                            <a className='hamburger__icon'>
                                <Link to="/" className='hamburger__icon'>  <GiHamburgerMenu /> </Link>
                            </a>
                        </ul>
                    </nav>
                </div>
            </section>
    )
}

export default NavBar;