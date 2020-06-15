import React from 'react';
import { NavLink } from 'react-router-dom'
import './navlinks.style.css'

const NavLinks = (props) => {
    return (
        <div className={"mobile-class-links " + props.animation}>
            
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
    );
};

export default NavLinks;