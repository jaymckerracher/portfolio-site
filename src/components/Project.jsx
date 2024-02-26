import ReadMoreButton from "./ReadMoreButton";
import { useState } from "react";

function Project ({project}) {
    const [fadeStyle, setFadeStyle] = useState('projectFade');
    const [projectStyling, setProjectStyling] = useState('projectMain projectMainLimit');
    const {title, imgSrc, imgAlt, imgId, desc} = project;

    return (
        <div className="project">
            <h3>{title}</h3>
            <div className={projectStyling}>
                <div className={fadeStyle} />
                <div className="projectImgContainer">
                    <img src={imgSrc} alt={imgAlt} id={imgId}/>
                </div>
                {desc.map(paragraph => {
                    return <p>{paragraph}</p>
                })}
            </div>
            <ReadMoreButton setFadeStyle={setFadeStyle} setProjectStyling={setProjectStyling}/>
        </div>
    )
}

export default Project;