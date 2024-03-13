import ReadMoreButton from "./ReadMoreButton";
import { useState } from "react";

function Project ({project}) {
    const [fadeStyle, setFadeStyle] = useState('projectFade');
    const [projectStyling, setProjectStyling] = useState('projectMain projectMainLimit');
    const {title, imgSrc, imgAlt, imgId, desc, githubLink} = project;

    return (
        <div className="project">
            <h3>{title}</h3>
            <div className={projectStyling}>
                <div className="projectImgContainer">
                    <img src={imgSrc} alt={imgAlt} id={imgId}/>
                </div>
                {desc.map(paragraph => {
                    return <p>{paragraph}</p>
                })}
                <p>To see more of the technologies used, along with the rest of the code, check out the GitHub repo <a href={githubLink}target="_blank" className="projectLink">here</a>.</p>
                <div className={fadeStyle} />
            </div>
            <ReadMoreButton setFadeStyle={setFadeStyle} setProjectStyling={setProjectStyling}/>
        </div>
    )
}

export default Project;