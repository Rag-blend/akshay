import React from 'react';
import logo from './images/mcb2 logo.png';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="logo-link">
                    <img src={logo} alt="Logo" className="logo-img" />
                </a>
                <div className="nav-links">
                    <a href="#" className="nav-link">About Us</a>
                    <a href="#" className="nav-link">Products</a>
                    <a href="#" className="nav-link">Services</a>
                    <a href="#" className="nav-link">Contact Us</a>
                    <a href="#" className="nav-link">Blog</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
