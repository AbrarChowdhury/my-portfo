import React from 'react';
import "./service.style.css"
const Service = (props) => {
    return (
        <div className="service">
            <img className="service-icon"alt={props.title} src={props.icon}></img>
            <div>
            <h1 className = "service-title">{props.title}</h1>
            <p className = "service-desc">{props.desc}</p>
            </div>
        </div>
    );
};

export default Service;