import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <header>
            <h1 className="logo">Dazzle Dentistry</h1>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/home" className="link">Home</NavLink></li>
                    <li><NavLink to="#" className="link">About</NavLink></li>
                    <li><HashLink to="/home#services" className="link">Services</HashLink></li>
                </ul>
            </nav>
            {
                user?.email ? <div>
                    <label className="signed-as">Signed as : {user.email}</label>
                    <button className="signup-btn" onClick={logOut}>Logout</button>
                </div> : <div className="right">
                <NavLink to="/signin" className="signin-link">Sign in</NavLink>
                <NavLink to="/signup">
                    <button className="signup-btn">Signup</button>
                </NavLink>
            </div>
            }
        </header>
    );
};

export default Header;