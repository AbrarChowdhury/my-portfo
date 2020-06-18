import React from 'react';
import Stack from './components/stack/stack.component'
import { Link } from 'react-router-dom'
import ChangeText from './components/changeText/changeText'
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
        desc:"Some datas are better kept as sectret, I ensure full data security"
    }

]
let number=0;

const Services = () => {
    return (
        <div>
            <section className="services">
                <div className="half-container">
                
                        <Stack />
                        
                        <h1 className='header'>My Websites Are <ChangeText time={6000} array={[services[0].title,services[1].title,services[2].title,services[3].title,services[4].title]}/>.</h1>
                        <h2 className='subtitle'><ChangeText time={6000} array = {[services[0].desc,services[1].desc,services[2].desc,services[3].desc,services[4].desc]} /></h2>                   
                
                        <br/><br/>
                        <p className="name">Interested already? <br/>
                        want me work on your
                        <Link to="/contact"><strong className="big-c2action"> <ChangeText time={2500} array = {["Landing-Page","E-commmerese site","Personal Portolio"]} /></strong>
                        </Link> ?
                        </p>
                  </div>
            </section>
        </div>
    );
};

export default Services;