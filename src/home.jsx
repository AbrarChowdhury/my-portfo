import React from 'react';
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
        <section className="home">
        <div className="half-container">
          <h2 className="name">Hi, I'm Abrar.</h2>
          <h1 className="header"> Full-Stack Developer.</h1>
          <p className="subtitle">Jack of all trades, Master of Web Development. A designer who dives deep into problem solving, an engineer by heart.
          </p>
          <Link to="/about">
          <p><span className="c2action">Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i></span></p>
          </Link>
          </div>
      </section>
        </div>
    );
};

export default Home;