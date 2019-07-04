import React from "react"
import { Helmet } from 'react-helmet'

import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

const App = () => {

  return(
    <div className="app-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forrest Longanecker | Software Engineer</title>
        <link rel="canonical" href="https://longanecker.tech" />
      </Helmet>
      <div className="nav-container">
        <Navbar />
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
