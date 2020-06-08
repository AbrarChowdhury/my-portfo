import React from 'react';
import ServiceCard from './components/serviceCard/serviceCard.component';

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
                    <div className="height">
                        <h1 className='header'>Amazing Things I'll Make For You.</h1>
                        <h2 className='name'>From simple single page websites to E-commerse sites i've got you fully covered.</h2>
                    </div>
                    
                    <div className="services">
                    {services.map((service)=>(
                        <ServiceCard 
                            image={service.image} 
                            title={service.title}
                            description={service.desc}
                        />
                    ))}
                    </div>                   
                   
                </div>
            </section>
        </div>
    );
};

export default Services;