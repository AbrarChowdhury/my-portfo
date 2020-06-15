import React, { Component} from 'react';
import './mobileNav.style.css'
import NavLinks from './navLinks/navlinks.component'

class MobileNav extends Component {
    state = {
        isClicked: false,
    }
    render() {
        const classText= this.state.isClicked ? "menu-btn open" : "menu-btn"
        return (
            <div>
                {this.state.isClicked? <NavLinks animation="fade-in" />: <NavLinks animation="fade-out" />}
            <div className= {classText} onClick={() => {
                this.setState({isClicked: !this.state.isClicked})
            }}>      
                    <div className='menu-btn-burger'></div>
            </div>
            </div>           
        );
    }
}

export default MobileNav;

