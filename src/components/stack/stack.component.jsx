import React, { Component, PropTypes } from 'react';
import './stack.style.css'
import ChangeText from '../changeText/changeText';
class componentName extends Component {
    constructor(props) {
        super(props);
        this.state={
            number:0,
        }
    }

    render() {
        return (
            <div className="stack-container subtitle">
                <p className="stack">Front-End: <ChangeText time={2000} array = {["HTML5","CSS3","JavaScript","React","JQuery","Bootstap","Material-UI","Materialize"]} /></p>                
                <div className = "line"/>
                <p className="stack">Back-End: <ChangeText time={2200} array = {["Node.js","Express","MongoDb","MySQL",]} /></p>
                <div className = "line"/>
                <p className="stack">UI/UX: <ChangeText time={2500} array = {["Xd","Illustrator","Photoshop"]} /></p>
                <br/><br/>
                </div>
        );
    }
}

componentName.propTypes = {

};

export default componentName;