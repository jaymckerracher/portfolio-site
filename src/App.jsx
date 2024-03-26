import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCopy, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faJsSquare, faHtml5, faCss3Alt, faReact, faCloudflare } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useEffect, useState } from 'react';

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

  function handleLinkClick (event) {
    if (event.target.classList.contains('nav3Clickable')) {
      if (nav3BlurStyle === 'nav3Blur nav3BlurHide') {
        setNav3BlurStyle('nav3Blur');
        setNav3BorderStyle('nav3Border');
      }
      else {
        setNav3BlurStyle('nav3Blur nav3BlurHide');
        setNav3BorderStyle('nav3Border nav3BorderHide');
      }
    }
  };

  const nav2Ref = useRef(null);
  const [nav2BorderStyle, setNav2BorderStyle] = useState('nav2Border');
  const [nav2Style, setNav2Style] = useState('nav2');

  const aboutRef = useRef(null);

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const [nav3BlurStyle, setNav3BlurStyle] = useState('nav3Blur nav3BlurHide');
  const [nav3BorderStyle, setNav3BorderStyle] = useState('nav3Border nav3BorderHide');


  useEffect(() => {
    const handleScroll = () => {
      // handle nav2 reaching top of screen
      const nav2Top = nav2Ref.current.getBoundingClientRect().top;
      if (nav2Top <= 0) {
        setNav2BorderStyle('nav2Border nav2BorderTop');
        setNav2Style('nav2 nav2Top');
      }
      else {
        setNav2BorderStyle('nav2Border');
        setNav2Style('nav2');
      }

      // handle about reaching top of screen
      const aboutTop = aboutRef.current.getBoundingClientRect().top;
      const skillsTop = skillsRef.current.getBoundingClientRect().top;
      const projectsTop = projectsRef.current.getBoundingClientRect().top;

      const secondaryElements = document.getElementsByClassName('secondaryColour');
      if (aboutTop > 0) {
        [...secondaryElements].forEach(element => {
          element.classList.remove('secondaryColourB', 'secondaryColourC', 'secondaryColourD');
        })
      }
      else if (projectsTop <= 0) {
        [...secondaryElements].forEach(element => {
          element.classList.add('secondaryColourD');
          element.classList.remove('secondaryColourB', 'secondaryColourC');
        })
      }
      else if (skillsTop <= 0) {
        [...secondaryElements].forEach(element => {
          element.classList.add('secondaryColourC');
          element.classList.remove('secondaryColourB', 'secondaryColourD');
        })
      }
      else if (aboutTop <= 0) {
        [...secondaryElements].forEach(element => {
          element.classList.add('secondaryColourB');
          element.classList.remove('secondaryColourC', 'secondaryColourD');
        })
      }
    };
    
    document.getElementById('main').addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="backgroundImgContainer" />
      <div className="container">
        <div className="navContainer">
          <nav className='upperNav secondaryColour'>
            <div className="upperNavInnerContainer">
              <h2 className='navHeading'>Jump To:</h2>
              <div className="navList">
                <a href='#about' className='navLink'>About</a>
                <a href='#skills' className='navLink'>Skills</a>
                <a href='#projects' className='navLink'>Projects</a>
              </div>
            </div>
          </nav>
          <nav className='lowerNav secondaryColour'>
            <div className="lowerNavInnerContainer">
              <h2 className='navHeading'>Other Links:</h2>
              <div className="navIcons">
                <a href="https://www.linkedin.com/in/jay-mckerracher-8a086a2a6/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
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
        <main id='main'>
          <header>
            <img src="src/assets/profile.jpeg" alt="Profile Image" className='bigDevImg'/>
            <img src="src/assets/profile.jpeg" alt="Profile Image" className='smallDevImg'/>
            <h1>Jay McKerracher</h1>
            <div className="customRule secondaryColour" />
            <h2>Junior Software Engineer</h2>
          </header>
          <div className={`${nav2BorderStyle} secondaryColour`} ref={nav2Ref}>
            <nav className={nav2Style}>
              <ul className='nav2List'>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
              </ul>
              <div className="nav2Icons">
                <a href="https://www.linkedin.com/in/jay-mckerracher-8a086a2a6/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='nav2Icon' /></a>
                <a href="https://github.com/jaymckerracher" target='_blank'><FontAwesomeIcon icon={faGithub} className='nav2Icon'/></a>
                <FontAwesomeIcon icon={faEnvelope} className='nav2Icon' onClick={handleButtonClick}/>
              </div>
            </nav>
          </div>
          <div className="nav3Strip" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faBars} className='nav3StripIcon nav3Clickable'/>
          </div>
          <div className={`${nav3BlurStyle} nav3Clickable`} onClick={handleLinkClick}>
            <div className={`${nav3BorderStyle} secondaryColour`}>
              <nav className="nav3">
                <ul className='nav3List'>
                  <li onClick={handleLinkClick}><a href='#about' className='nav3Clickable'>About</a></li>
                  <li onClick={handleLinkClick}><a href='#skills' className='nav3Clickable'>Skills</a></li>
                  <li onClick={handleLinkClick}><a href='#projects' className='nav3Clickable'>Projects</a></li>
                </ul>
                <div className="nav3Icons">
                  <a href="https://www.linkedin.com/in/jay-mckerracher-8a086a2a6/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='nav3Icon' /></a>
                  <a href="https://github.com/jaymckerracher" target='_blank'><FontAwesomeIcon icon={faGithub} className='nav3Icon'/></a>
                  <FontAwesomeIcon icon={faEnvelope} className='nav3Icon' onClick={handleButtonClick}/>
                </div>
              </nav>
            </div>
          </div>
          <div className="mainContent">
            <section id='about' ref={aboutRef}>
              <h2 className='sectionHeader'>About</h2>
              <div className="customRule secondaryColour" />
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
            <section id='skills' ref={skillsRef}>
              <h2 className='sectionHeader'>Skills</h2>
              <div className="customRule secondaryColour" />
              <div className="gridFlex">
                <div className="grid-container">
                  <div className="grid-item">
                    <h3>Languages</h3>
                    <ul>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                  <div>
                    <div className="skillsFlexContainer secondaryColour">
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
                    <div className="skillsFlexContainer secondaryColour">
                      <div className="skillsInnerContainer">
                        <img src="/portfolio-site/src/assets/sql.png" alt="SQL" className='skillsImg'/>
                        <img src="/portfolio-site/src/assets/psql.png" alt="PSQL" className='skillsImg'/>
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
                    <div className="skillsFlexContainer secondaryColour">
                      <div className="skillsInnerContainer">
                        <FontAwesomeIcon icon={faHtml5} className='skillIcon oddIcon'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='skillIcon oddIcon' />
                        <FontAwesomeIcon icon={faReact} className='skillIcon' />
                        <img src="/portfolio-site/src/assets/lighthouse.svg" alt="Lighthouse" className='skillsImg'/>
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
                    <div className="skillsFlexContainer secondaryColour">
                      <div className="skillsInnerContainer">
                        <img src="/portfolio-site/src/assets/jest.png" alt="Jest" className='skillsImg'/>
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
                    <div className="skillsFlexContainer secondaryColour">
                      <div className="skillsInnerContainer">
                        <FontAwesomeIcon icon={faCloudflare} className='skillIcon' />
                        <img src="/portfolio-site/src/assets/netlify.svg" alt="Netlify" className='skillsImg'/>
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
                    <div className='skillsFlexContainer secondaryColour'>
                      <div className="skillsInnerContainer">
                        <img src="/portfolio-site/src/assets/agile.png" alt="Agile" className='skillsImg'/>
                        <img src="/portfolio-site/src/assets/paired.png" alt="Agile" className='skillsImg'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id='projects' ref={projectsRef}>
              <h2 className='sectionHeader'>Projects</h2>
              <div className="customRule secondaryColour" />
              <Project project={projects[0]}/>
              <Project project={projects[1]}/>
              <Project project={projects[2]}/>
            </section>
          </div>
          <footer>
            <p>"Built purely with React, using FontAwesome icons and the React Toastify NPM package.</p>
            <p>
              {/* Background photo by <a href="https://unsplash.com/@jasonortego?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' className='projectLink'>Jason Ortego</a> on <a href="https://unsplash.com/photos/white-buildings-beside-seashore-behind-mountain-under-thick-clouds-TznjqhCHR9g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' className='projectLink'>Unsplash</a> */}
              Background photo by <a href="https://unsplash.com/@mikehindle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className='projectURL'>Mike Hindle</a> on <a href="https://unsplash.com/photos/grayscale-photo-of-a-bridge-pYn_gdRqtiA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className='projectURL'>Unsplash</a>"
            </p>
          </footer>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}

export default App;
