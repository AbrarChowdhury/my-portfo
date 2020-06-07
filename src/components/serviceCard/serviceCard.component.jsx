import React from 'react';
import './serviceCard.style.css'
const image = 'url(/Untitled-1.png';

  

function ServiceCard(props){
    return(
        <div className="card">
            <div className="icon" style={{
                backgroundImage: props.image
            }}>
            </div>
            <div className="description">
                <h1 className="service-title">{props.title}</h1>
                <p className="service-description">{props.description}</p>
            </div>
            
            
        </div>
    )
}

export default ServiceCard;