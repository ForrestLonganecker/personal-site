import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelopeSquare } from 'react-icons/fa'

import './Contact.css'

const Contact = () => {

  return(
    <div className="contact-wrapper" id="contact">
      <h2 className="contact-header fun">Contact Me:</h2>
      
      <h3 className="contact-name main">Forrest Longanecker</h3>      

      <div className="contact-link-container">
        <label className="contact-link-label">Github:</label>
        <a className="contact-link" href="https://github.com/ForrestLonganecker" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a>

        <label className="contact-link-label">LinkedIn:</label>
        <a className="contact-link" href="https://www.linkedin.com/in/forrestlonganecker/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30}/></a>

        <label className="contact-link-label">Email:</label>
        <a className="contact-link" href="mailto:forrlong.tech@gmail.com"><FaEnvelopeSquare size={30} /></a>
      </div>
    </div>
  );
}

export default Contact