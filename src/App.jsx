import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCopy, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faJsSquare, faHtml5, faCss3Alt, faReact, faCloudflare } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import Project from './components/Project';
import projects from './projects';

function App() {
  const handleButtonClick = async () => {
    try {
      await navigator.clipboard.writeText('jaymckerracher@gmail.com');
      toast.dismiss();
      toast.success('Email address copied to clipboard!', {
        theme: 'colored',
        position: 'top-center',
        autoClose: 5000,
        transition: Flip,
      });
    } catch (error) {
      toast.error('Failed to copy email address.', {
        theme: 'colored',
        position: 'top-center',
        autoClose: 5000,
        transition: Flip,
      });
    }
  };

  return (
    <>
      <div className="backgroundImgContainer" />
      <div className="container">
        <div className="navContainer">
          <nav className='upperNav'>
            <div className="upperNavInnerContainer">
              <h2 className='navHeading'>Jump To:</h2>
              <div className="navList">
                <a href="#about" className='navLink'>About</a>
                <a href="#skills" className='navLink'>Skills</a>
                <a href="#projects" className='navLink'>Projects</a>
              </div>
            </div>
          </nav>
          <nav className='lowerNav'>
            <div className="lowerNavInnerContainer">
              <h2 className='navHeading'>Other Links:</h2>
              <div className="navIcons">
                <a href="https://www.linkedin.com/in/jay-mckerracher-8a086a2a6/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                <a href="https://github.com/jaymckerracher" target='_blank'><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                <div className="mail">
                  <FontAwesomeIcon icon={faEnvelope} className='icon mailButton' onClick={handleButtonClick}/>
                  <FontAwesomeIcon icon={faCopy} className='copyIcon'/>
                  <div className="emailAddress">
                    <p>jaymckerracher@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <main>
          <div className="mainContainer">
            <header>
              <div className="headerContent">
                <h1>Jay McKerracher</h1>
                <img src="src/assets/profile.jpeg" alt="Profile Image" />
              </div>
              <div className="customRule" />
              <h2>Junior Software Engineer</h2>
              <img src="src/assets/profile.jpeg" alt="Profile Image" className='smallDevImg'/>
            </header>
            <div className="mainContent">
              <section id='about'>
                <h2 className='sectionHeader'>About</h2>
                <div className="customRule" />
                <div className="aboutContainer">
                  <p>
                    The retail industry has taught me so much over the last few years; I have learnt how to effectively communicate, work as part of a large team, and deal with unexpected events. I’ve had the opportunity to manage a team of people and also had the pleasure of working abroad. I really enjoyed my time in the retail world.
                  </p>
                  <p>
                    However, retail was an industry that I fell into. I realised that it was time to start moving down a path that I had chosen - that path being software development. I chose this path for a few reasons. Firstly, I really enjoy solving problems; knowing that there is a solution to be found gives me a desire to seek it out. Having a list of goals to work through gives me a sense of progression and purpose. Fixing a bug and seeing code run in the way I intend is an amazing feeling and leads to work that I am proud of.
                  </p>
                  <p>
                    I made the decision to join the NorthCoders bootcamp to get an introduction to programming. Despite only being three months long, I found that I learnt so much in such a short time. The course mainly focused on teaching front and back end skills with JavaScript, but also placed a large focus on Test Driven Development and Paired Programming. Towards the end of the three months I got the opportunity to work with a larger group to create our final project. I had a great time on the bootcamp and am excited to jump head first into this exciting industry!
                  </p>
                </div>
              </section>
              <section id='skills'>
                <h2 className='sectionHeader'>Skills</h2>
                <div className="customRule" />
                <div className="gridFlex">
                  <div className="grid-container">
                    <div className="grid-item">
                      <h3>Languages</h3>
                      <ul>
                        <li>JavaScript</li>
                      </ul>
                    </div>
                    <div>
                      <div className="skillsFlexContainer">
                        <div className="skillsInnerContainer">
                          <FontAwesomeIcon icon={faJsSquare} className='skillIcon' />
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <h3>Back End</h3>
                      <ul>
                        <li>SQL</li>
                        <li>PSQL</li>
                        <li>Seeding</li>
                        <li>Migrations</li>
                      </ul>
                    </div>
                    <div>
                      <div className="skillsFlexContainer">
                        <div className="skillsInnerContainer">
                          <img src="src/assets/sql.png" alt="SQL" className='skillsImg'/>
                          <img src="src/assets/psql.png" alt="PSQL" className='skillsImg'/>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <h3>Front End</h3>
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Lighthouse and other accessibility tools</li>
                      </ul>
                    </div>
                    <div>
                      <div className="skillsFlexContainer">
                        <div className="skillsInnerContainer">
                          <FontAwesomeIcon icon={faHtml5} className='skillIcon oddIcon'/>
                          <FontAwesomeIcon icon={faCss3Alt} className='skillIcon oddIcon' />
                          <FontAwesomeIcon icon={faReact} className='skillIcon' />
                          <img src="src/assets/lighthouse.svg" alt="Lighthouse" className='skillsImg'/>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <h3>Testing</h3>
                      <ul>
                        <li>Test Driven Development</li>
                        <li>Jest</li>
                        <li>Supertest</li>
                      </ul>
                    </div>
                    <div>
                      <div className="skillsFlexContainer">
                        <div className="skillsInnerContainer">
                          <img src="src/assets/jest.png" alt="Jest" className='skillsImg'/>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <h3>Hosting</h3>
                      <ul>
                        <li>Cloudflare</li>
                        <li>Netlify</li>
                      </ul>
                    </div>
                    <div>
                      <div className="skillsFlexContainer">
                        <div className="skillsInnerContainer">
                          <FontAwesomeIcon icon={faCloudflare} className='skillIcon' />
                          <img src="src/assets/netlify.svg" alt="Netlify" className='skillsImg'/>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <h3>Other</h3>
                      <ul className='finalGridList'>
                        <li>Paired Programming</li>
                        <li>Technical Communication</li>
                        <li>SDL</li>
                        <li>Agile & SCRUM methodologies</li>
                      </ul>
                    </div>
                    <div>
                      <div className='skillsFlexContainer'>
                        <div className="skillsInnerContainer">
                          <img src="src/assets/agile.png" alt="Agile" className='skillsImg'/>
                          <img src="src/assets/paired.png" alt="Agile" className='skillsImg'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id='projects'>
                <h2 className='sectionHeader'>Projects</h2>
                <div className="customRule" />
                <Project project={projects[0]}/>
                <Project project={projects[1]}/>
                <Project project={projects[2]}/>
              </section>
            </div>
            <footer>
              <p>"Built purely with React, using FontAwesome icons and the React Toastify NPM package.</p>
              <p>
                Background Photo by <a href="https://unsplash.com/@jasonortego?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' className='projectLink'>Jason Ortego</a> on <a href="https://unsplash.com/photos/white-buildings-beside-seashore-behind-mountain-under-thick-clouds-TznjqhCHR9g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' className='projectLink'>Unsplash</a>"
              </p>
            </footer>
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}

export default App;
