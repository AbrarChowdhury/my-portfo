import React from 'react';
import ServiceCard from './components/serviceCard/serviceCard.component';
import { Link } from 'react-router-dom'
const services = [
    {
        image:'/images/resIcon.png',
        title:'Responsive',
        desc:'The webpages will look great on all devices.'
    },
    {
        image:'/images/resIcon.png',
        title:'Interactive',
        desc:"I will create fully-immersive experience for the users. The pages and therein elements will interact with user "
    },
    {
        image:'/images/resIcon.png',
        title:"Dynamic",
        desc:"The pages will be fully customized for the specific person viewing it. Here, all the magic will happen in the back-end."
    },
    {
        image:'/images/resIcon.png',
        title:"Fast",
        desc:"My website are going be fast. nobody these days have the time spare."
    },
    {
        image:'/images/resIcon.png',
        title:"Secure",
        desc:"Have some confidential data to store?. no problem, I will salt and hash your data before storing them."
    }

]


const Services = () => {
    return (
        <div>
            <section className="services">
                <div className="half-container">
                    <div>
                        <h1 className='header'>Amazing Things I'll Make For You.</h1>
                        <h2 className='name'>From simple single page websites to E-commerse sites i've got you fully covered.</h2>
                        <br/>
                   
                        </div>
                    
                    <div className="service-list">
                    {services.map((service)=>(
                        <ServiceCard 
                            image={service.image} 
                            title={service.title}
                            description={service.desc}
                        />
                    ))}
                    </div> 
                    <br/><br/><br/><br/><br/>
                    <p className='name'><strong>Want my service?</strong></p>
                    <Link to="/contact"><span className="c2action">Let me know the details <i class="fa fa-chevron-right" aria-hidden="true"></i></span></Link>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                </div>
            </section>
        </div>
    );
};

export default Services;