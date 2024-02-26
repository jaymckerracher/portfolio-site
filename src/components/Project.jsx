import ReadMoreButton from "./ReadMoreButton";

function Project () {
    return (
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
    )
}

export default Project;