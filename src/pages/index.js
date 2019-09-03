import React from 'react'
import { Helmet } from 'react-helmet'
import { useState } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Hamburger from '../components/Hamburger/Hamburger'

const App = () => {

  let [isNavbarOpen, setIsNavbarOpen] = useState(true)

  return(
    <div className="app-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forrest Longanecker | Software Engineer</title>
        <link rel="canonical" href="https://longanecker.tech" />
      </Helmet>
      <div className="nav-container">
        <Hamburger setIsNavbarOpen={setIsNavbarOpen} isNavbarOpen={isNavbarOpen} />
        <Navbar isNavbarOpen={isNavbarOpen} />
      </div>
      <div className="main-container">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App
