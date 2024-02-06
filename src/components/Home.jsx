import Footer from "./Footer";
import Header from "./Header";

function Home () {
    return (
        <div className="componentContainer">
            <div className="homeBackground">
                <Header />
                <div className="homeContent">
                    <div className="homeLeftContent">
                        <p>Hi! I'm <span className="leftContentName">Jay</span>, a Junior Software Developer.</p>
                    </div>
                    <div className="homeRightContent">
                        <img src="src/assets/profile.jpeg" alt="This is an image" className="profileImg"/>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;