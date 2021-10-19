import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                <div class="container">
                    <a class="navbar-brand" href="#">Dazzle Dentistry</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <HashLink className="nav-link" to="/home#services">Services</HashLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/">Shop</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                            {
                                user?.email ? <>
                                    <h5 className="text-white">Signed in as : {user.displayName}</h5>
                                    <button onClick={logOut} className="btn btn-outline-info logout-btn" >Logout</button>
                                </> : <>
                                    <NavLink to="/signin" className="nav-link">Sign in</NavLink>
                                    <NavLink to="/signup">
                                        <button className="btn btn-outline-info">Signup</button>
                                    </NavLink>
                                </>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
        // <header>
        //     <h1 className="logo">Dazzle Dentistry</h1>
        //     <nav>
        //         <ul className="nav-links">
        //             <li><NavLink to="/home" className="link">Home</NavLink></li>
        //             <li><HashLink to="/home#services" className="link">Services</HashLink></li>
        //             <li><HashLink to="/home#services" className="link">Tips</HashLink></li>
        //             <li><HashLink to="/home#services" className="link">Shop</HashLink></li>
        //         </ul>
        //     </nav>
        //     {
        //         user?.email ? <div>
        //             <label className="signed-as">Signed as : {user.displayName}</label>
        //             <button className="signup-btn" onClick={logOut}>Logout</button>
        //         </div> : <div className="right">
        //         <NavLink to="/signin" className="signin-link">Sign in</NavLink>
        //         <NavLink to="/signup">
        //             <button className="signup-btn">Signup</button>
        //         </NavLink>
        //     </div>
        //     }
        // </header>
    );
};

export default Header;