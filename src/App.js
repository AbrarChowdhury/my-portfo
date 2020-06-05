import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component'
import Form from './components/form/form.component'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className="home hide">
        <div className="half-container">
          <h2 className="name">Hi, I'm Abrar.</h2>
          <h1 className="header"> Full-Stack Developer.</h1>
          <p className="home-subtitle">The jack of all trades and Master of Web Development. A designer who loves diving deep into problem solving and an engineer by heart.
          </p>
          <p><span className="c2action">Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i></span></p>
        </div>
      </section>
      
      
      <section className="about hide">
        <div className="half-container">
          <h1 className="header">I build products with passion.</h1>
          <p className="subtitle">I'm Abrar Shams Chowdhury.<br/><br/>

          I strive to create unique solutions that surprise and delight users while keeping the complex technical dependencies in mind for implementation, scalability and developer sanity.<br/>
          
          An engineer by heart, I love to invent, design, analyze, build and test.<br/><br/>
          
          
          Jack of all trades because, before finally settling with web development I've worn many different hats. I have tried arts-crafts, graphic design, 2d animation, 3d modeling, wood-working, event management, robotics and product design. 
          Not just scratching the surface, I went pretty deep and made a name for myself in each of those fields.<br/><br/>

          
          I am a designer who loves diving deep into problem solving. So do have a problem to get solved?. Do you want to build a website or web-application that solves a problem?
           <span className='c2action'> Lets talk</span>.
          
          </p>  
        </div>      
      </section>
      
      
      <section className="home">
      
      </section>
      
      
      <section className="contact">
        <div className='half-container'>
          <h1 className='header'>Let's Make Something!</h1>
          <h2 className='name'>Get in touch directly</h2>
          <p className="right"></p>
          <p><i class="fa fa-phone"></i><a href="tel:+8801836096182"> +88 01836096182</a><span className="spacer"></span><i class="fa fa-envelope"></i><a href="mailto:abrar.chowdhury99@gmail.com"> abrar.chowdhury99@gmail.com</a></p>
          <h2 className='name'>Or just use the contact form below:</h2>
          <Form/>
        </div>
        
      </section>
    </div>
  );
}

export default App;
