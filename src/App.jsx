import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCopy, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faJsSquare, faHtml5, faCss3Alt, faReact, faCloudflare } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import ReadMoreButton from './components/ReadMoreButton';
import Project from './components/Project';

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

  const [readMoreButton, setReadMoreButton] = useState('readMoreButtonUp');
  const [readMoreArrow, setReadMoreArrow] = useState('readMoreArrowUp');
  const [readMoreText, setReadMoreText] = useState('Read More');
  const [readMoreTextStyle, setReadMoreTextStyle] = useState('readMoreText');

  function readMoreFunc (y, lessOrMore) {
    setReadMoreButton(`readMoreButton${y}`);
    setReadMoreArrow(`readMoreArrow${y}`);
    setReadMoreTextStyle('readMoreTextTransition');
    setTimeout(() => {
      setReadMoreText(`Read ${lessOrMore}`);
      setReadMoreTextStyle('readMoreText');
    }, 250);
  };

  return (
    <>
      <div className="container">
        <nav>
          <div className="navList">
            <a href="#about" className='navLink'>
              <span className='navHyphen'/>
              About
            </a>
            <a href="#skills" className='navLink'>
              <span className='navHyphen'/>
              Skills
            </a>
            <a href="#projects" className='navLink'>
              <span className='navHyphen'/>
              Projects
            </a>
          </div>
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
        </nav>
        <main>
          <div className="mainContainer">
            <header>
              <div className="headerContent">
                <h1>Jay McKerracher</h1>
                <img src="src/assets/profile.jpeg" alt="Profile Image" />
              </div>
              <div className="customRule" />
            </header>
            <div className="mainContent">
              <section id='about'>
                <h2>About</h2>
                <div className="customRule" />
                <div className="aboutContainer">
                  <p>
                    The retail industry has taught me so much over the last few years; I have learnt how to effectively communicate, work as part of a large team, and deal with unexpected events. I’ve had the opportunity to manage a team of people and also had the pleasure of working abroad. I really enjoyed my time in the retail world.
                  </p>
                  <p>
                    However, retail was an industry that I fell into. I realised that it was time to start moving down a path that I had chosen - that path being software development. I chose this path for a few reasons. Firstly, I really enjoy solving problems; knowing that there is a solution to be found gives me a desire to seek it out. Having a list of goals to work through gives me a sense of progression and purpose. Fixing a bug and seeing code run in the way I intended is an amazing feeling and leads to work that I am proud of.
                  </p>
                  <p>
                    I made the decision to join the NorthCoders bootcamp to get an introduction to programming. Despite only being three months long, I found that I learnt so much in such a short time. The course mainly focused on teaching front and back end skills with JavaScript, but also placed a large focus on Test Driven Development and Paired Programming. Towards the end of the three months I got the opportunity to work with a larger group to create our final project. I had a great time on the bootcamp and am excited to jump head first into this exciting industry!
                  </p>
                </div>
              </section>
              <section id='skills'>
                <h2>Skills</h2>
                <div className="customRule" />
                <div className="gridFlex">
                  <div className="grid-container">
                    <div className="grid-item">
                      <h3>Languages</h3>
                      <ul>
                        <li>JavaScript</li>
                      </ul>
                    </div>
                    <div className="grid-item">
                      <div className="skillsFlexContainer">
                        <FontAwesomeIcon icon={faJsSquare} className='skillIcon' />
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
                    <div className="grid-item">
                      <div className="skillsFlexContainer">
                        <img src="src/assets/sql.png" alt="SQL" className='skillsImg'/>
                        <img src="src/assets/psql.png" alt="PSQL" className='skillsImg'/>
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
                    <div className="grid-item">
                      <div className="skillsFlexContainer">
                        <FontAwesomeIcon icon={faHtml5} className='skillIcon oddIcon'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='skillIcon oddIcon' />
                        <FontAwesomeIcon icon={faReact} className='skillIcon' />
                        <img src="src/assets/lighthouse.svg" alt="Lighthouse" className='skillsImg'/>
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
                    <div className="grid-item">
                      <div className="skillsFlexContainer">
                        <img src="src/assets/jest.png" alt="Jest" className='skillsImg'/>
                      </div>
                    </div>
                    <div className="grid-item">
                      <h3>Hosting</h3>
                      <ul>
                        <li>Cloudflare</li>
                        <li>Netlify</li>
                      </ul>
                    </div>
                    <div className="grid-item">
                      <div className="skillsFlexContainer">
                        <FontAwesomeIcon icon={faCloudflare} className='skillIcon' />
                        <img src="src/assets/netlify.svg" alt="Netlify" className='skillsImg'/>
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
                    <div className='grid-item'>
                      <div className='skillsFlexContainer'>
                        <img src="src/assets/agile.png" alt="Agile" className='skillsImg'/>
                        <img src="src/assets/paired.png" alt="Agile" className='skillsImg'/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id='projects'>
                <h2>Projects</h2>
                <div className="customRule" />

                <div className="project">
                  <h3>PlotTwist</h3>
                  <div className="projectMain">
                    <div className="projectFade" />
                    <div className="projectImgContainer">
                      <img src="src/assets/plottwist.png" alt="PlotTwist" id='plotTwistImg'/>
                    </div>
                    <p>For the final three weeks of the bootcamp, I worked with a team of five to create an app where users can upload their unwanted books and swap them with other users’ unwanted books. This was my first time working with a larger team and, despite being nervous at first, I enjoyed every second of the collaborative process.</p>
                    <p>The best part about working with a team was the sense of camaraderie that drove us throughout the project. The majority of the first week was spent planning - leaving us two weeks of development time. We had a lot of features that we wanted to include (some of which were new to all of us, such as a chat functionality) and being able to split the workload and help each other was a big motivation!</p>
                    <p>That’s not to say we didn’t experience problems during development. Working with new technologies such as React Native and Supabase introduced challenges that we hadn’t anticipated. React Native, while being structurally similar to React.js, was syntactically different enough to slow down progress at first. Utilising new components such as Flatlists and Drawers, while using a different technique to style the app took a while to get used to.</p>
                    <p>By the end of the three weeks, we had delivered our MVP, along with some extra features. Once logged into the app, users can upload unwanted books to their library. These books can then be seen by other users and a swap request can be made. Utilising the negotiation interface along with the chat can then lead to a fair swap that satisfies both parties.</p>
                  </div>
                  <ReadMoreButton />
                </div>

                <div className="project">
                  <h3>NorthCoders News (Front End)</h3>
                  <div className="projectMain">
                    <div className="projectFade" />
                    <div className="projectImgContainer">
                      <img src="src/assets/nc-news-front.png" alt="NC News Front End" id='NcFrontImg'/>
                    </div>
                    <p className='projectText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci nulla autem quas dolore, voluptates pariatur numquam molestiae quidem, suscipit nemo maxime hic doloribus, totam asperiores excepturi dolores nesciunt ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci nulla autem quas dolore, voluptates pariatur numquam molestiae quidem, suscipit nemo maxime hic doloribus, totam asperiores excepturi dolores nesciunt ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci nulla autem quas dolore, voluptates pariatur numquam molestiae quidem, suscipit nemo maxime hic doloribus, totam asperiores excepturi dolores nesciunt ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci nulla autem quas dolore, voluptates pariatur numquam molestiae quidem, suscipit nemo maxime hic doloribus, totam asperiores excepturi dolores nesciunt ipsum?</p>
                  </div>
                  <ReadMoreButton />
                </div>

                <Project />

                <div className="project">
                  <h3>NorthCoders News (Back End)</h3>
                  <div className="projectMain">
                    <div className="projectFade" />
                    <div className="projectImgContainer">
                      <img src="src/assets/nc-news-back.png" alt="NC News Back End" id='NcBackImg'/>
                    </div>
                    <p className='projectText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci nulla autem quas dolore, voluptates pariatur numquam molestiae quidem, suscipit nemo maxime hic doloribus, totam asperiores excepturi dolores nesciunt ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci nulla autem quas dolore, voluptates pariatur numquam molestiae quidem, suscipit nemo maxime hic doloribus, totam asperiores excepturi dolores nesciunt ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci nulla autem quas dolore, voluptates pariatur numquam molestiae quidem, suscipit nemo maxime hic doloribus, totam asperiores excepturi dolores nesciunt ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci nulla autem quas dolore, voluptates pariatur numquam molestiae quidem, suscipit nemo maxime hic doloribus, totam asperiores excepturi dolores nesciunt ipsum?</p>
                  </div>
                  <ReadMoreButton />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}

export default App;
