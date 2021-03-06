import React from 'react';
import { Link } from 'react-router-dom'
import '../node_modules/aos/dist/aos.css'; 
import AOS from 'aos'; 
class About extends React.Component { 
  constructor(props, context) { 
    super(props, context); 
    AOS.init(); 
  } 
  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 
  render(){ 
    return (
      <div>
            
      <section className="about">
      <div className="half-container">
        <h1 className="header">I Build Products With Passion.</h1>
        <div className = "picture-card aos-item"  data-aos-mirror="true" data-aos="zoom-in-left" data-aos-duration="500">
        <img  className="profile-img" src="/images/abrar-ps.jpg"></img>
          <p className="subtitle  p-c-text">
          An engineer by heart, I love to invent, design, analyze, build, and test.<br/><br/>
          My goal is to create unique solutions that surprise and delight users.
          </p>
          
        </div>
        <p>
        Why Jack of all trades? Because, before finally settling with web development I've worn many different hats. I have tried arts-crafts, graphic design, 2d animation, 3d modeling, carpentry, event management, robotics and product design. 
        And not just scratching the surface, I went pretty deep and made a name for myself in each of those fields.<br/><br/>

        
        Have a problem to solve? Want to build a website or web-application that solves a problem?
        </p>
        <br/>  
        <Link to="/contact"><p className='c2action subtitle'> Lets talk <i class="fa fa-chevron-right" aria-hidden="true"></i></p></Link>
      </div>      
    </section>
        </div>
    );
  } 
}




export default About;