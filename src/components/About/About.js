import React from 'react'
import { FaReact, FaNodeJs, FaGithub, FaSlack, FaTrello, FaYarn, FaNpm, FaHtml5, FaCss3Alt } from 'react-icons/fa'

import PuppyPicture from '../PuppyPicture/PuppyPicture'
import './About.css'

const About = () => {

  return(
    <div className="about-container main" id="about">
      <h2 className="about-header fun">About me:</h2>
      <div className="about-content-wrapper">
        <p>Passionate about engineering impactful solutions through collaboration, innovation and determination.</p>
        <p>Driven by creative desire and a hunger to never stop learning.</p>
        <p>Fulfilled by overcoming challenges and helping others succeed.</p>

        <p>
          Hey, I'm Forrest! Located in Portland Oregon, in the beautiful Pacific NW.
          When I am not tapping away at the keyboard I love to spend my time exploring 
          the beautiful world we live in. Rock climbing has been an obsession for
          almost a decade. Hiking out to boulders in the middle of the
          woods is one of my favorite pastimes, always with my trusty pup. 
        </p>

      </div>

      <div className="about-image-container">
        <PuppyPicture alt="dog laying near waterfall" />
      </div>
      
      <div className="about-content-wrapper">
        <h4 className="about-section-header fun">Tech stack:</h4>

        <div className="tech-stack-container">
          <ul className="tech-stack-list">
            <h4 className="tech-stack-label big">JavaScript</h4>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">React</p>
              <div  className="tech-icon-container">
                <FaReact size={25}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Gatsby</p>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Next.js</p>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Node.js</p>
              <div  className="tech-icon-container">
                <FaNodeJs size={25}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Express</p>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">EJS</p>
            </li>
          </ul>

          <ul className="tech-stack-list">
            <h4 className="tech-stack-label big">Workflow</h4>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">GitHub</p>
              <div  className="tech-icon-container">
                <FaGithub size={25}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Heroku</p>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">NPM</p>
              <div  className="tech-icon-container">
                <FaNpm size={25}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Yarn</p>
              <div  className="tech-icon-container">
                <FaYarn size={25}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Trello</p>
              <div  className="tech-icon-container">
                <FaTrello size={25}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Slack</p>
              <div  className="tech-icon-container">
                <FaSlack size={25}/>
              </div>
            </li>
          </ul>
        </div>


        <div className="tech-stack-container">
          <ul className="tech-stack-list">
            <h4 className="tech-stack-label big">SQL</h4>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">PostgreSQL</p>
            </li>
            <li className="tech-stack-item main">
            <p className="tech-stack-item-name">Sequelize</p>
            </li>
          </ul>

          <ul className="tech-stack-list">
            <h4 className="tech-stack-label big">General</h4>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">HTML</p>
              <div  className="tech-icon-container">
                <FaHtml5 size={25}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">CSS/SCSS</p>
              <div  className="tech-icon-container">
                <FaCss3Alt size={25}/>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-content-wrapper">
        <h4 className="about-section-header fun">Interests:</h4>
        
        <div className="tech-stack-container">
        <ul className="tech-stack-list">
          <h4 className="tech-stack-label big">Meetups</h4>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">Code for PDX</p>
          </li>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">Friends who code</p>
          </li>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">Bloc/Thinkful family dinners</p>
          </li>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">New Relic Future Talks</p>
          </li>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">Portland Data Science</p>
          </li>
        </ul>

        <ul className="tech-stack-list">
          <h4 className="tech-stack-label big">Podcasts</h4>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">Syntax FM</p>
          </li>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">Second Career Devs</p>
          </li>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">React Podcast</p>
          </li>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">Software Engineering Daily</p>
          </li>
          <li className="tech-stack-item main">
            <p className="tech-stack-item-name">CodeNewbie</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default About