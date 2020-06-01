import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className="home">
        <div className="half-container">
          <h2 className="name">Hi, I'm Abrar.</h2>
          <h1 className="header"> Full-Stack Developer.</h1>
          <p className="subtitle">The jack of all trades and Master of Web Development.<br/>A designer who loves diving deep into problem solving.<br/>An engineer by heart.
          </p>
          <p><span className="c2action">Learn more</span></p>  
        </div>
      </section>
      
      
      <section className="about">
        <div className="half-container">
          <h2 className="name">Hi, I'm Abrar.</h2>
          <h1 className="header">I build products with passion.</h1>
          <p className="subtitle">The jack of all trades and Master of Web Development.<br/>A designer who loves diving deep into problem solving.<br/>An engineer by heart.</p>  
        </div>      
      </section>
      
      
      <section className="home">
      
      </section>
      
      
      <section className="home">
      
      </section>
    </div>
  );
}

export default App;
