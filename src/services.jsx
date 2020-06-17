import React from 'react';
import Stack from './components/stack/stack.component'
import { Link } from 'react-router-dom'
const services = [
    {
        image:'/images/resIcon.png',
        title:'Responsive',
        desc:'My layouts will work on any device, big or small.'
    },
    {
        image:'/images/resIcon.png',
        title:'Intuitive',
        desc:"Strong preference for easy to use, intuitive UX/UI."
    },
    {
        image:'/images/resIcon.png',
        title:"Dynamic",
        desc:"Websites don't have to be static, I love making pages come to life."
    },
    {
        image:'/images/resIcon.png',
        title:"Fast",
        desc:"Fast load times and lag free interaction, my highest priority"
    },
    {
        image:'/images/resIcon.png',
        title:"Secure",
        desc:"Have some confidential data to store?. no problem, I will salt and hash your data before storing them."
    }

]
let number=0;

const Services = () => {
    return (
        <div>
            <section className="services">
                <div className="half-container">
                    <div>
                        <Stack />
                        <h1 className='header'>My Websites Are {services[number].title}.</h1>
                        <h2 className='name'>{services[number].desc}</h2>                   
                        </div>
                    
                  </div>
            </section>
        </div>
    );
};

export default Services;