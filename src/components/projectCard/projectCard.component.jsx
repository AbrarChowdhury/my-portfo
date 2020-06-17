import React from 'react';
import './projectCard.style.css'

function ProjectCard(props){
    return(
        <div>
            <div className="project-container">
                <div className="project-text">
                    <h1 className =" project-caption-title">{props.title}</h1>
                    <p>{props.desc}</p>
                    <p><a className="c2action" href={props.link}>View Live</a></p>
                </div>
                <img className="project-img" src={props.image}></img>
            </div>        
        </div>
        
    )
}
export default ProjectCard;