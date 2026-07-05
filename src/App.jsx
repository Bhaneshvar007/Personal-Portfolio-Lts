
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Bhaneshvar Kshirsagar - Portfolio</title>
        <meta name="description" content="Software Trainee & MERN Stack Developer Portfolio" />
        <meta name="keywords" content="React, MERN, .NET, Software Developer, Portfolio" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
