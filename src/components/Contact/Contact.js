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
        <a className="contact-link" href="https://github.com/ForrestLonganecker"><FaGithub size={30}/></a>

        <label className="contact-link-label">LinkedIn:</label>
        <a className="contact-link" href="https://www.linkedin.com/in/forrestlonganecker/"><FaLinkedinIn size={30}/></a>

        <label className="contact-link-label">Email:</label>
        <div className="email-icon">
          <FaEnvelopeSquare size={30} />
        </div>
        <p className="main">forrlong.tech@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact