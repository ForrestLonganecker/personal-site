import React from 'react'

import './Navbar.css'

const Navbar = () => {

  return(
    <nav className="big">
      <a href="#home">Home</a>

      <a href="#about">About</a>

      <a href="#projects">Projects</a>

      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar