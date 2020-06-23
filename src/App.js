import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component'
import Home from './home'
import About from './about'
import Services from './services'
import Work from './work'
import Contact from './contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop';
function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar />
        <ScrollToTop/>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/work" component={Work}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>

    
    
    
  );
}

export default App;
