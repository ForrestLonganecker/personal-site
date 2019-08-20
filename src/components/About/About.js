import React from 'react'
import { Icon } from '@iconify/react'
import languageTypescript from '@iconify/icons-mdi/language-typescript'
import graphqlIcon from '@iconify/icons-mdi/graphql'
import gatsbyIcon from '@iconify/icons-mdi/gatsby'
import awsIcon from '@iconify/icons-mdi/aws'
import { FaReact, FaNodeJs, FaGithub, FaSlack, FaTrello, FaYarn, FaNpm, FaHtml5, FaCss3Alt, FaJs, FaSass } from 'react-icons/fa'
import { DiDatabase, DiPostgresql, DiHeroku } from 'react-icons/di'

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

          <h4 className="tech-stack-label big">Languages</h4>
          <ul className="tech-stack-list">
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">JavaScript</p>
              <div  className="tech-icon-container">
                <FaJs size={26}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">TypeScript</p>
              <div  className="tech-icon-container">
                <Icon icon={languageTypescript} width="30"/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">SQL</p>
              <div  className="tech-icon-container">
                <DiDatabase size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">GraphQL</p>
              <div  className="tech-icon-container">
                <Icon icon={graphqlIcon} width="30"/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">HTML</p>
              <div  className="tech-icon-container">
                <FaHtml5 size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">CSS</p>
              <div  className="tech-icon-container">
                <FaCss3Alt size={30}/>
              </div>
            </li>
          </ul>

          <h4 className="tech-stack-label big">Libraries / Frameworks</h4>
          <ul className="tech-stack-list">
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">React</p>
              <div  className="tech-icon-container">
                <FaReact size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Gatsby</p>
              <div  className="tech-icon-container">
                <Icon icon={gatsbyIcon} width="30"/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Next.js</p>

              <div  className="tech-icon-container">
                <svg width="40px" height="30px" viewBox="0 0 512 309" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                    <path d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z" fill="#4CAF50" fill-rule="nonzero"></path>
                  </g>
                </svg>
              </div>

            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Node.js</p>
              <div  className="tech-icon-container">
                <FaNodeJs size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Express</p>
              <div  className="tech-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30">
                <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" fill="#4CAF50"/>
              </svg>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">PostgreSQL</p>
              <div  className="tech-icon-container">
                <DiPostgresql size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Sass</p>
              <div  className="tech-icon-container">
                <FaSass size={30}/>
              </div>
            </li>
          </ul>


          <h4 className="tech-stack-label big">Tools</h4>
          <ul className="tech-stack-list">
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">GitHub</p>
              <div  className="tech-icon-container">
                <FaGithub size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Heroku</p>
              <div  className="tech-icon-container">
                <DiHeroku size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Netlify</p>
              <div  className="tech-icon-container" >
                <svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                  <path fill="#4CAF50" d="M28.589 14.135l-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 0 1-.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 0 1-.033.006h-.015c-.005-.003-.01-.007-.02-.017a1.716 1.716 0 0 0-.495-.381zm5.258-.288l3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 0 0-.015-.006c-.037-.015-.08-.032-.08-.07 0-.038.044-.056.081-.071l.012-.005 3.98-1.684zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 0 0-.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 0 0 1.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801l-7.186 7.186 1.23-7.56.002-.01c.001-.01.003-.02.006-.029.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 0 0 .695-.517c.024-.028.053-.055.09-.06a.09.09 0 0 1 .029 0l5.06 1.04zm-8.707 8.707l-.81.81-8.955-12.942a.424.424 0 0 0-.01-.014c-.014-.019-.029-.038-.026-.06.001-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 0 1 .076.033c.013.013.016.027.019.043a1.757 1.757 0 0 0 1.028 1.175c.028.014.016.045.003.078a.238.238 0 0 0-.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 0 1-1.206 0c-.466-.148-.869-.55-1.674-1.356L8.73 28.73l2.349-3.643c.011-.018.022-.034.04-.047.025-.018.061-.01.091 0a2.434 2.434 0 0 0 1.638-.083c.027-.01.054-.017.075.002a.19.19 0 0 1 .028.032L21.95 38.05zM7.863 27.863L5.8 25.8l4.074-1.738a.084.084 0 0 1 .033-.007c.034 0 .054.034.072.065a2.91 2.91 0 0 0 .13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976l-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 0 0 .03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01-4.337 1.837zM.831 19.892a2 2 0 0 1 .09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 0 0 4.626 6.687c.027.036.057.076.026.106-.146.161-.292.337-.395.528a.16.16 0 0 1-.05.062c-.013.008-.027.005-.042.002H9.78L.831 19.891zm5.68-6.403l4.491-4.491c.422.185 1.958.834 3.332 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 0 0 .523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063c-.012.02-.023.037-.043.05-.024.015-.058.008-.086.001a2.274 2.274 0 0 0-.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 0 1-.045-.051l-4.808-7.013zm5.398-5.398l5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 0 1 1.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 0 1-.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 0 0-1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676l3.818 3.818-.92 5.698v.015a.135.135 0 0 1-.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 0 0-.548.273.154.154 0 0 0-.02.017c-.011.012-.022.023-.04.025a.114.114 0 0 1-.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 0 0-.31-.915c-.028-.046-.059-.094-.035-.141l4.066-6.303zm-3.932 8.606l5.454 2.31c.03.014.063.027.076.058a.106.106 0 0 1 0 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173-.017 0-.035 0-.052-.017-.03-.03 0-.072.027-.11a.76.76 0 0 0 .014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 0 1 .034-.04c.027-.02.067-.01.098.004zm-6.246 9.185l12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025L25.756 23.7l-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 0 0-1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z"/>
                </svg>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">AWS S3</p>
              <div  className="tech-icon-container">
                <Icon icon={awsIcon} width="30"/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">NPM</p>
              <div  className="tech-icon-container">
                <FaNpm size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Yarn</p>
              <div  className="tech-icon-container">
                <FaYarn size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Trello</p>
              <div  className="tech-icon-container">
                <FaTrello size={30}/>
              </div>
            </li>
            <li className="tech-stack-item main">
              <p className="tech-stack-item-name">Slack</p>
              <div  className="tech-icon-container">
                <FaSlack size={30}/>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-content-wrapper">
        <h4 className="about-section-header fun">Interests:</h4>
        
        <div className="tech-stack-container">
        <h4 className="tech-stack-label big">Events</h4>
        <ul className="tech-stack-list">
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://brigade.codeforamerica.org/brigades/Code-for-PDX/" target="_blank" rel="noopener noreferrer">Code for PDX</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://infinite.red/ChainReactConf" target="_blank" rel="noopener noreferrer">Chain React Conference</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://join.slack.com/t/friendswhocodehq/shared_invite/enQtNzMxNjQyNjU3NzgwLWQ5YzJkMjk4ODk4YmYwMTY4ZTdmNjRiZDI0ODRiZTFiOGYzNjg1ODk2YzE1NDRiOWFmMjQyOTBjZjExMTk0OTI" target="_blank" rel="noopener noreferrer">Friends who code</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://www.meetup.com/Portland-ReactJS/" target="_blank" rel="noopener noreferrer">Portland ReactJS</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://www.meetup.com/GraphQLPDX/" target="_blank" rel="noopener noreferrer">GraphQLPDX</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://www.meetup.com/Portland-JavaScript-Admirers/" target="_blank" rel="noopener noreferrer">Portland JavaScript Admirers</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://www.meetup.com/Front-End-PDX/" target="_blank" rel="noopener noreferrer">Front End PDX</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://www.meetup.com/New-Relic-FutureTalks-PDX/" target="_blank" rel="noopener noreferrer">New Relic Future Talks</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://www.meetup.com/Portland-Data-Science-Group/" target="_blank" rel="noopener noreferrer">Portland Data Science Group</a>
          </li>
        </ul>

        <h4 className="tech-stack-label big">Media</h4>
        <ul className="tech-stack-list">
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://syntax.fm/" target="_blank" rel="noopener noreferrer">Syntax FM</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://secondcareerdevs.com/" target="_blank" rel="noopener noreferrer">Second Career Devs</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://reactpodcast.simplecast.fm/" target="_blank" rel="noopener noreferrer">React Podcast</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://softwareengineeringdaily.com/" target="_blank" rel="noopener noreferrer">Software Engineering Daily</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://www.codenewbie.org/basecs" target="_blank" rel="noopener noreferrer">BaseCS</a>
          </li>
          <li className="tech-stack-item main">
            <a className="tech-stack-link" href="https://www.codenewbie.org/" target="_blank" rel="noopener noreferrer">CodeNewbie</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default About
