import React from 'react';
import './navbar.style.css';
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <nav>
            <div>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/">
                    Home
                </NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/about">
                    About
                </NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/services">
                    Services
                </NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/work">
                    Work
                </NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to="/contact">
                    Contact
                </NavLink>
            </div>
        </nav>
        
    )
  }
export default Navbar;