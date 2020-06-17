import React, { Component, PropTypes } from 'react';
import './stack.style.css'
class componentName extends Component {
    constructor(props) {
        super(props);
        this.state={
            number:0,
        }
    }

    componentWillMount() {
    
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="stack-container subtitle">
                <p className="stack">UI/UX - Xd</p>
                <div className = "line"/>
                <p className="stack">Front-End - HTML5</p>
                <div className = "line"/>
                <p className="stack">Back-End - Node.js</p>
            </div>
        );
    }
}

componentName.propTypes = {

};

export default componentName;