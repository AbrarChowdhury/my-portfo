import React from 'react';
import ServiceContainer from './components/service/serviceConainer'
import { Link } from 'react-router-dom'


const Services = () => {
    return (
        <div>
            <section className="services">
                <div className="half-container">
                
         
                        
                    <h1 className='header'>I Build All Sorts of <br/>Websites And Web Apps.</h1>
                    <h2 className='subtitle'>From simple <strong>single page</strong> websites to fully functional <strong>e-commmerse</strong> sites, I have got you fully covered.</h2>                   
                        
                    <br/>
                    <p className="name">My Website Are</p>
                    <ServiceContainer />
                    <br/>
                     <Link to="/about">
                        <p><span className="c2action">view my recent work <i class="fa fa-chevron-right" aria-hidden="true"></i></span></p>
                    </Link>
                  </div>
            </section>
        </div>
    );
};

export default Services;