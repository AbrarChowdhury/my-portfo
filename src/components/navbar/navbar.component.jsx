import React from 'react';
import './navbar.style.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a className="routes" href="/">Home</a></li>
                <li><a className="routes" href="/">About</a></li>
                <li><a className="routes" href="/">Services</a></li>
                <li><a className="routes" href="/">Work</a></li>
                <li><a className="routes" href="/">Contact</a></li>
            </ul>
        </nav>
        
    )
  }
export default Navbar;