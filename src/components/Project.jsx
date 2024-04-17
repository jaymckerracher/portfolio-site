import ReadMoreButton from "./ReadMoreButton";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project ({project, image}) {
    const {title, imgAlt, imgId, desc} = project;
    const [fadeStyle, setFadeStyle] = useState('projectFade');
    const [projectStyling, setProjectStyling] = useState('projectMain projectMainLimit');

    return (
        <div className="project">
            <h3>{title}</h3>
            <div className={projectStyling}>
                <div className="projectImgContainer">
                    <img src={image} alt={imgAlt} id={imgId}/>
                </div>
                {desc.map(paragraph => {
                    return <p key={desc.indexOf(paragraph)}>{paragraph}</p>
                })}
                {project.githubLink ? <div className="projectLink">
                    <FontAwesomeIcon icon={faGithub} className="projectLinkIcon"/>
                    <a href={project.githubLink} className="projectURL">Visit the GitHub repo</a>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="projectOutgoingIcon"/>
                </div> : null}
                {project.hostedLink ? <div className="projectLink">
                    <FontAwesomeIcon icon={faLink} className="projectLinkIcon"/>
                    <a href={project.hostedLink} className="projectURL">Visit the project</a>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="projectOutgoingIcon"/>
                </div> : null}
            </div>
            <ReadMoreButton setFadeStyle={setFadeStyle} setProjectStyling={setProjectStyling}/>
        </div>
    )
}

export default Project;