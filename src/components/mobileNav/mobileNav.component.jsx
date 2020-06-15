import React, { Component} from 'react';
import './mobileNav.style.css'
class MobileNav extends Component {
    state = {
        isClicked: false,
    }
    render() {
        const classText= this.state.isClicked ? "menu-btn open" : "menu-btn"
        return (

            <div className= {classText} onClick={() => {
                this.setState({isClicked: !this.state.isClicked})
            }}>      
                    <div className='menu-btn-burger'></div>
            </div>           
        );
    }
}

export default MobileNav;

