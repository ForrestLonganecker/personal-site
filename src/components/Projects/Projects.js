import React from 'react'
import { FaGithub, FaLaptopCode } from 'react-icons/fa'

import hangTrainerPhoto from '../../../static/Hangtrainer-mobile-screenshot-create.png'
import sendipediaPhoto from '../../../static/Sendipedia-mobile-screenshot-landing.png'

import './Projects.css'

const Projects = () => {

  return(
    <div className="projects-wrapper" id="projects">
      <h2 className="projects-header fun">Projects:</h2>

      <div className="project-container main">
        <div className="project-title-container">
          <h3 className="project-title big">HangTrainer</h3>

          <div className="project-img-container">
            <img src={hangTrainerPhoto} alt="HangTrainer app preview" className="project-image" />
          </div>
        </div>

        <div className="project-description-stack-wrapper">
          <div className="project-description container">
            <p className="project-description">
              A mobile first web app designed to help people chart progress over 
              time. Intuitive/minimal UI makes this app easy to use while 
              exercising.
            </p>
          </div>

          <ul className="project-tech-stack">
            <li className="project-tech-stack-item">
              React
            </li>
            <li className="project-tech-stack-item">
              Next.js
            </li>
            <li className="project-tech-stack-item">
              Node.js
            </li>
            <li className="project-tech-stack-item">
              Express
            </li>
            <li className="project-tech-stack-item">
              SCSS
            </li>
          </ul>

          <div className="project-links-container">
            <a href="https://github.com/ForrestLonganecker/HangTrainer" className="project-link">
              <FaGithub size={30}/>
            </a>
            <a href="https://forrestlonganecker-hangtrainer.herokuapp.com/" className="project-link">
              <FaLaptopCode size={30}/>
            </a>
          </div>        
        </div>

      </div>

      <div className="devider"/>

      <div className="project-container main">
        <div className="project-title-container">
          <h3 className="project-title big">Sendipedia</h3>

          <div className="project-img-container">
            <img src={sendipediaPhoto} alt="Sendipedia app preview" className="project-image" />
          </div>
        </div>

        <div className="project-description-stack-wrapper">
          <div className="project-description container">
            <p className="project-description">
              An app that allows users to create, view and edit wikis. Utilizing 
              Stripe API to provide account upgrade and Sendgrid API for automated
              email responses. Premium account members can create private wikis and
              invite specific users to collaborate.
            </p>
          </div>

          <ul className="project-tech-stack">
            <li className="project-tech-stack-item">
              Node.js
            </li>
            <li className="project-tech-stack-item">
              Express
            </li>
            <li className="project-tech-stack-item">
              EJS
            </li>
            <li className="project-tech-stack-item">
              Stripe API
            </li>
            <li className="project-tech-stack-item">
              Sendgrid API
            </li>
          </ul>

          <div className="project-links-container">
            <a href="https://github.com/ForrestLonganecker/sendipedia" className="project-link">
              <FaGithub size={30}/>
            </a>
            <a href="https://forrestlonganecker-sendipedia.herokuapp.com/" className="project-link">
              <FaLaptopCode size={30}/>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects