import React from 'react';
import './serviceCard.style.css'


  

function ServiceCard(props){

    return(
        <div className="card">
            <div >
                <img className="icon" src={props.image}/>
            </div>
            <div className="description">
                <h1 className="service-title">{props.title}</h1>
                <p className="service-description">{props.description}</p>
            </div>
            
            
        </div>
    )
}

export default ServiceCard;