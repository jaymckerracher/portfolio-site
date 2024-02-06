import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faLinkedin} className='icon'/>
            <FontAwesomeIcon icon={faGithub} className='icon'/>
        </div>
    )
}

export default Footer;