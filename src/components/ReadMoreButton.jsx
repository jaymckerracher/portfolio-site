import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ReadMoreButton () {
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
        <button className={`${readMoreButton} readMoreButton`} onClick={() => {
            if (readMoreButton === 'readMoreButtonUp') {
                readMoreFunc('Down', 'Less');
            }
            else {
                readMoreFunc('Up', 'More');
            }
        }}>
            <p className={readMoreTextStyle}>{readMoreText}</p>
            <FontAwesomeIcon icon={faChevronDown} className={readMoreArrow}/>
        </button>
    )
}

export default ReadMoreButton;