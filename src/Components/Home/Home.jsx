import "./Home.scss"


//components
import Season from "../Season/Season"
import Collection from "../Collection/Collection"
import NewProducts from "../New-products/New-products"

//images
import HeroVideo from "../../Assets/video/matnar.mp4"
import LogoHero from "../../Assets/image/matnar-hero.png"

function Home() {

    return (
        <>
            <div className="hero-section__wrapper">
                <video className="video-section" autoPlay loop muted  src={HeroVideo}></video>
                <div className="hero-section">
                    <div className="hero-image__wrap">
                        <img className="hero-logo" src={LogoHero} alt="logo" />
                    </div>
                </div>
            </div>
            <Season />
            <Collection />
            <NewProducts />
        </>
    )
}

export default Home;