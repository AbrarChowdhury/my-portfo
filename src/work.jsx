import React from 'react';
import ProjectCard from './components/projectCard/projectCard.component'
import projectsArray from './projectsData';
import { Link } from 'react-router-dom'
import '../node_modules/aos/dist/aos.css'; 
import AOSw from 'aos'; 
class Work extends React.Component { 
  constructor(props, context) { 
    super(props, context); 
    AOSw.init(); 
  }
  componentDidMount (){ 
    AOSw.refresh(); 
  }  
  componentWillReceiveProps (){ 
    AOSw.refresh(); 
  } 
  render(){ 
    return (
      <div>
      <section className="work">
      <div className="half-container height ">
        <h1 className="header">View Some Of My Work.</h1>
        <h2 className="subtitle">Or, if you are already excited about building your project with me,</h2>
        <Link to="/contact"><p className="c2action">Let me know the details <i class="fa fa-chevron-right" aria-hidden="true"></i></p></Link>
        <div className="projects">
        {projectsArray.map((project)=>(
          <div className="aos-item"  data-aos-mirror="true" data-aos="zoom-in-left" data-aos-duration="1000" >
            <ProjectCard title={project.title} desc={project.desc} image={project.image}link={project.link}/>
          </div>
        ))}
     </div>
       
       
      </div>

      
    </section>
      </div>
  );
  } 
}







export default Work;