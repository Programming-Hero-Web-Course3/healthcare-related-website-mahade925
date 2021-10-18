import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="logo">Dazzle Dentistry</h1>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="#" className="link">Home</NavLink></li>
                    <li><NavLink to="#" className="link">About</NavLink></li>
                    <li><NavLink to="#" className="link">Services</NavLink></li>
                    <li><NavLink to="#" className="link">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="right">
                <NavLink to="/signin" className="signin-link">Sign in</NavLink>
                <button className="signup-btn">Signup</button>
            </div>
        </header>
    );
};

export default Header;