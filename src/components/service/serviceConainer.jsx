import React from 'react';
import './service.style.css'
import Service from './service.component';


const services = [
    {
        image:'/icons/responive-8.png',
        title:'Responsive.',
        desc:'My layouts will work on any device, big or small.'
    },
    {
        image:'/icons/intuitive-8.png',
        title:'Intuitive.',
        desc:"Strong preference for easy to use, intuitive UX/UI."
    },
    {
        image:'/icons/dynamic-8.png',
        title:"Dynamic.",
        desc:"Websites don't have to be static, I love making pages come to life."
    },
    {
        image:'/icons/fast-8.png',
        title:"Fast.",
        desc:"Fast load times and lag free interaction, my highest priority."
    },
    {
        image:'/icons/secure-8.png',
        title:"Secure.",
        desc:"Some datas are better kept as sectret, I ensure complete data security."
    }

]

const ServiceContainer = () => {
    return (
        <div className ="service-container">
            {services.map((service)=>(
            <Service title={service.title} desc={service.desc} icon={service.image}/>
           ))}
        </div>
    );
};

export default ServiceContainer;