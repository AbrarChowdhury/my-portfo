import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component'
import Home from './home'
import About from './about'
import Services from './services'
import Work from './work'
import Contact from './contact'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
