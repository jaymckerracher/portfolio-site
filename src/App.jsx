import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="container">
      <nav>
        <div className="navList">
          <a href="#" className='navLink'>
            <span className='navHyphen'/>
            About
          </a>
          <a href="" className='navLink'>
            <span className='navHyphen'/>
            Skills
          </a>
          <a href="" className='navLink'>
            <span className='navHyphen'/>
            Projects
          </a>
        </div>
        <div className="navIcons">
          <a href="https://www.linkedin.com/in/jay-mckerracher-8a086a2a6/"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
          <a href="https://github.com/jaymckerracher"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
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
          <section id='about'></section>
          <section id='skills'></section>
          <section id='projects'></section>
        </div>
      </main>
    </div>
  )
}

export default App;
