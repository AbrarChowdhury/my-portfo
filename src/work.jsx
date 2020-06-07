import React from 'react';
import ProjectCard from './components/projectCard/projectCard.component'
import projectsArray from './projectsData';


const Work = () => {
    return (
        <div>
        <section className="work">
        <div className="half-container height ">
          <h1 className="header">View Some Of My Latest Work.</h1>
        </div>

        <div className="projects">
           {projectsArray.map((project)=>(
            <ProjectCard title={project.title} desc={project.desc} image={project.image}link={project.link}/>
           ))}
        </div>
      </section>
        </div>
    );
};

export default Work;