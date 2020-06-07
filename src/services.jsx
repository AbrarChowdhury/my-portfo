import React from 'react';
import ServiceCard from './components/serviceCard/serviceCard.component';

const Services = () => {
    return (
        <div>
            <section className="services">
                <div className="half-container">
                    <h1 className='header'>Amazing Things I'll Make For You.</h1>
                
                    <h2 className='name'>From simple single page websites to E-commerse sites i've got you fully covered.</h2>
                    <ServiceCard 
                        image="url(/Untitled-1.png" 
                        title="Responsive"
                        description="The webpages will look great on all devices."
                    />
                    <ServiceCard 
                        image="url(/Untitled-1.png" 
                        title="Interactive"
                        description="I will create fully-immersive experience for the users. The pages and therein elements will interact with user "
                    />
                    <ServiceCard 
                        image="url(/Untitled-1.png" 
                        title="Dynamic"
                        description="The pages will be fully customized for the specific person viewing it. Here, all the magic will happen in the back-end."
                    />
                    <ServiceCard 
                        image="url(/Untitled-1.png" 
                        title="Fast"
                        description="My website are going be fast. nobody these days have the time spare."
                    />
                    <ServiceCard 
                        image="url(/Untitled-1.png" 
                        title="Secure"
                        description="Have some confidential data to store?. no problem, I will salt and hash your data before storing them."
                    />
                </div>
            </section>
        </div>
    );
};

export default Services;