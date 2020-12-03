import React from 'react';
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
        <section className="home">
        <div className="half-container">
          <h2 className="name">Hi, I'm Abrar.</h2>
          <h1 className="header"> Full-Stack Developer.</h1>
          <p className="subtitle">Jack of all trades, mastering web development. An engineer by heart, I love to invent, design, analyze, build, and test.
          </p>
          <Link to="/work">
          <p><span className="c2action">View my work <i class="fa fa-chevron-right" aria-hidden="true"></i></span></p>
          </Link>
          </div>
      </section>
        </div>
    );
};

export default Home;