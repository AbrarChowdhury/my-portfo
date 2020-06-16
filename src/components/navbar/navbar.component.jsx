import React from 'react';
import './navbar.style.css';
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <nav>
            <div className="navbar-links">
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/">
                    <span className= "nav-icon"><i className="fa fa-home"></i></span><span className="nav-title">Home</span>
                </NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/about">
                    About
                </NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/services">
                    Service
                </NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/work">
                    Work
                </NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/contact">
                <span className= "nav-icon"><i className="fa fa-address-book"></i></span><span className="nav-title">Contact</span>
                </NavLink>
            </div>
        </nav>
        
    )
  }
export default Navbar;