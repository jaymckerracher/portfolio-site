import { Link } from "react-router-dom";

function Header () {
    return (
        <div className="headerContainer">
            <h1 className="headerTitle">Jay McKerracher</h1>
            <ul className="headerList">
                <li className="headerListItem"><Link to={'Home'} className="link">Home</Link></li>
                <li className="headerListItem"><Link to={'About'} className="link">About</Link></li>
                <li className="headerListItem"><Link to={'Skills'} className="link">Skills</Link></li>
                <li className="headerListItem"><Link to={'Projects'} className="link">Projects</Link></li>
            </ul>
        </div>
    )
}

export default Header;