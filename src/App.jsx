import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCopy, faChevronUp, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faJsSquare, faHtml5, faCss3Alt, faReact, faCloudflare } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useEffect, useState } from 'react';

import Project from './components/Project';
import projects from './projects';

import profileImg from "./assets/profile.jpeg";
import sqlImg from "./assets/sql.png";
import psqlImg from "./assets/psql.png";
import lighthouseImg from "./assets/lighthouse.svg";
import jestImg from "./assets/jest.png";
import netlifyImg from "./assets/netlify.svg";
import agileImg from "./assets/agile.png";
import pairedImg from "./assets/paired.png";
import plottwistImg from "./assets/plottwist.png";
import ncNewsBackImg from "./assets/nc-news-back.png";
import ncNewsFrontImg from "./assets/nc-news-front.png";

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

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

  const nav3Ref = useRef(null);
  const [backToTopStyle, setBackToTopStyle] = useState('backToTopButton backToTopButtonHide');

  const canvasRef = useRef();

  useEffect(() => {
    // configuring three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(16, 16, 16)");
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    
    const colours = ['105, 166, 209', '148, 233, 255', '201, 235, 239', '255, 212, 177', '252, 173, 176'];
    const potentialZCoordinates = [0, -20];
    const sizeRanges = [[0.3, 0.6], [3, 5]];
    const speeds = [0.01, -0.01];
    const yLimits = [0.9, 0.7];
    const cubes = [];
    let cubeID = 0;

    function createRandomCube (cubeType) {
      const maxSize = sizeRanges[cubeType][1];
      const minSize = sizeRanges[cubeType][0];
      const zCoor = potentialZCoordinates[cubeType];
      const speed = speeds[cubeType];
      const yLimit = yLimit[cubeType];

      // creating the cube
      const cubeSize = Math.random() * (maxSize - minSize) + minSize;
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const cubeColour = colours[Math.floor(Math.random() * colours.length)];
      const material = new THREE.MeshBasicMaterial({ color: `rgb(${cubeColour})` });
      const cube = new THREE.Mesh(geometry, material);

      // defining the starting position
      const distanceToBack = 10 - zCoor + cubeSize/2;
      const verticalFOV = camera.fov * (Math.PI / 180);
      const visibleHeight = 2 * Math.tan( verticalFOV / 2 ) * distanceToBack;
      const visibleWidth = visibleHeight * camera.aspect;
      const randY = Math.random() * (visibleHeight * yLimit) - visibleHeight * (yLimit * 2);
      cubeType === 0 ?
        cube.position.set(camera.position.x - (visibleWidth + cubeSize) / 2, randY, zCoor)
      :
        cube.position.set(camera.position.x + (visibleWidth + cubeSize) / 2, randY, zCoor);

      cubes.push({
        cube: cube,
        visibleWidth: visibleWidth,
        cubeSize: cubeSize,
        uniqueID: cubeID,
        speed: speed
      });

      cubeID ++;

      scene.add(cube);
    }
    
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // const depthRenderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
    // const depthMaterial = new THREE.MeshDepthMaterial();

    createRandomCube(1);
    setInterval(() => {
      createRandomCube(0)
    }, 5000);
    setInterval(() => {
      createRandomCube(1)
    }, 30000);
    
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      const expiredCubes = [];

      cubes.forEach(cubeObj => {
        // animating the cube
        cubeObj.cube.position.x += cubeObj.speed;
        cubeObj.cube.rotation.x += cubeObj.speed;
        cubeObj.cube.rotation.y += cubeObj.speed;

        // removing the expired cube from the scene
        if (cubeObj.cube.position.x > (cubeObj.visibleWidth / 2) + (cubeObj.cubeSize)) {
          scene.remove(cubeObj.cube)
          expiredCubes.push(cubeObj);
        };

        // removing the expired cube from the cubes array
        if (expiredCubes.length) {
          expiredCubes.forEach(expiredCube => {
            for (let i=0; i<cubes.length; i++) {
              if (expiredCube.uniqueID === cubes[i].uniqueID) {
                cubes.splice(i, 1);
              }
            }
          })
        }
      })
    };
    animate();

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

      // handle transparency of backToTopButton
      const nav3Bottom = nav3Ref.current.getBoundingClientRect().bottom;
      nav3Bottom < 0 ? setBackToTopStyle('backToTopButton') : setBackToTopStyle('backToTopButton backToTopButtonHide')

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
          element.classList.remove('secondaryColourB', 'secondaryColourC');
          element.classList.add('secondaryColourD');
        })
      }
      else if (skillsTop <= 0) {
        [...secondaryElements].forEach(element => {
          element.classList.remove('secondaryColourB', 'secondaryColourD');
          element.classList.add('secondaryColourC');
        })
      }
      else if (aboutTop <= 0) {
        [...secondaryElements].forEach(element => {
          element.classList.remove('secondaryColourC', 'secondaryColourD');
          element.classList.add('secondaryColourB');
        })
      }
    };
    
    document.getElementById('main').addEventListener('scroll', handleScroll);
    return () => {
      document.getElementById('main').removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className='backgroundCanvas'/>
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
            <div className="headerImgBorder smallDevImgBorder secondaryColour">
              <img src={profileImg} alt="Profile Image" className='smallDevImg'/>
            </div>
            <div className="headerContent">
              <h1>Jay McKerracher</h1>
              <div className="customRule secondaryColour headerRule" />
              <h2>Junior Software Engineer</h2>
            </div>
            <div className="headerImgBorder bigDevImgBorder secondaryColour">
              <img src={profileImg} alt="Profile Image" className='bigDevImg'/>
            </div>
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
                <FontAwesomeIcon icon={faEnvelope} className='nav2Icon nav2Mail' onClick={handleButtonClick}/>
              </div>
            </nav>
          </div>
          <div className="nav3Strip nav3Clickable" onClick={handleLinkClick} ref={nav3Ref}>
            <div className="nav3StripIconContainer nav3Clickable">
              <FontAwesomeIcon icon={faBars} className='nav3StripIcon'/>
            </div>
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
                  <FontAwesomeIcon icon={faEnvelope} className='nav3Icon nav2Mail' onClick={handleButtonClick}/>
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
                        <img src={sqlImg} alt="SQL" className='skillsImg'/>
                        <img src={psqlImg} alt="PSQL" className='skillsImg'/>
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
                        <img src={lighthouseImg} alt="Lighthouse" className='skillsImg'/>
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
                        <img src={jestImg} alt="Jest" className='skillsImg'/>
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
                        <img src={netlifyImg} alt="Netlify" className='skillsImg'/>
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
                        <img src={agileImg} alt="Agile" className='skillsImg'/>
                        <img src={pairedImg} alt="Agile" className='skillsImg'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id='projects' ref={projectsRef}>
              <h2 className='sectionHeader'>Projects</h2>
              <div className="customRule secondaryColour" />
              <Project project={projects[0]} image={plottwistImg}/>
              <Project project={projects[1]} image ={ncNewsBackImg}/>
              <Project project={projects[2]} image={ncNewsFrontImg}/>
            </section>
          </div>
          <footer>
            <p>"Built purely with React, using FontAwesome icons and the React Toastify NPM package.</p>
            <p>
              {/* Background photo by <a href="https://unsplash.com/@jasonortego?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' className='projectLink'>Jason Ortego</a> on <a href="https://unsplash.com/photos/white-buildings-beside-seashore-behind-mountain-under-thick-clouds-TznjqhCHR9g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' className='projectLink'>Unsplash</a> */}
              Background photo by <a href="https://unsplash.com/@mikehindle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className='projectURL'>Mike Hindle</a> on <a href="https://unsplash.com/photos/grayscale-photo-of-a-bridge-pYn_gdRqtiA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className='projectURL'>Unsplash</a>"
            </p>
          </footer>
          <div className="backToTopContainer">
            <button className={backToTopStyle} onClick={() => document.getElementById('main').scrollTo(0, 0)}>
              <FontAwesomeIcon icon={faChevronUp} className='backToTopArrow secondaryColour'/>
            </button>
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}

export default App;
