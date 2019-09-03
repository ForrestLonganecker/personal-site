import React from 'react'
import { useState, useEffect, useRef } from 'react'

import './Navbar.css'
import { TimelineLite, Power2 } from 'gsap';

const Navbar = ({ isNavbarOpen }) => {

  let navAnimation = useRef(null);

  let [tl, setTl] = useState(new TimelineLite({paused: true, reversed: false}));

  useEffect(() => {
    tl.to(navAnimation, 0.5, {autoAlpha: 1, width: `50%`, ease: Power2.easeInOut});
  }, []);

  useEffect(() => {
    tl.reversed() ? tl.play() : tl.reverse();
  }, [isNavbarOpen]);

  return(
    <nav className="navbar big" ref={element => {navAnimation = element}}>
      <a href="#home">Home</a>

      <a href="#projects">Projects</a>
      
      <a href="#about">About</a>

      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar