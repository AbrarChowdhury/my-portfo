import React from 'react';
import ProjectCard from './components/projectCard/projectCard.component'
import projectsArray from './projectsData';
import { Link } from 'react-router-dom'

const Work = () => {

    return (
        <div>
        <section className="work">
        <div className="half-container height ">
          <h1 className="header">View Some Of My Work.</h1>
          <h2 className="subtitle">Or, if you are already excited about building your project with me,</h2>
          <Link to="/contact"><p className="c2action">Let me know the details <i class="fa fa-chevron-right" aria-hidden="true"></i></p></Link>
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