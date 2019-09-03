import React, {useState, useEffect, useRef} from 'react'
import { TimelineLite, Power2 } from 'gsap';

import './Hamburger.css'

const Hamburger = ({ setIsNavbarOpen, isNavbarOpen }) => {

  let animateUpper = useRef(null);
  let animateMiddle = useRef(null);
  let animateLower = useRef(null);
  
  let [tl, setTl] = useState(new TimelineLite({paused: true, reversed: true}))

  useEffect(() => {
    tl
      .to(animateUpper, 0.5, {attr: {d: "M8,2 L2,8"}, stroke: `#FFFFFF`, x: 1, ease:Power2.easeInOut}, 'start')
      .to(animateMiddle, 0.5, {autoAlpha: 0, stroke: `#FFFFFF`}, 'start')
      .to(animateLower, 0.5, {attr: {d: "M8,8 L2,2"}, stroke: `#FFFFFF`, x: 1, ease:Power2.easeInOut}, 'start');
  }, []);

  const toggleHamburger = () => {
    tl.reversed() ? tl.play() : tl.reverse();
    setIsNavbarOpen(!isNavbarOpen);
  };

  return(
    <svg className="hamburger" viewBox="0 0 12 10" width="120px" height="100px" onClick={() => toggleHamburger()}>
      <path d="M10,2 L2,2"  ref={element => {animateUpper = element}} style={{fill: `none`, stroke: `#000000`, strokeLinecap: `round`}}/>
      <path d="M2,5 L10,5"  ref={element => {animateMiddle = element}} style={{fill: `none`, stroke: `#000000`, strokeLinecap: `round`}}/>
      <path d="M10,8 L2,8"  ref={element => {animateLower = element}} style={{fill: `none`, stroke: `#000000`, strokeLinecap: `round`}}/>   
    </svg>
  );
}

export default Hamburger;