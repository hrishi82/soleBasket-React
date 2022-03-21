import {Link} from "react-router-dom"
const HeroSection = () =>{
    return (
        <section className="hero-container">
        <div className="hero-img-box">
            <img src="https://res.cloudinary.com/dac2rwutk/image/upload/v1647700877/starfish_qkfibq.jpg" alt="image" className="img-responsive hero-img" />
        </div>

        <section className="hero-text-container text-center">
            <h2 className="hero-heading-text">soledOut. All Season</h2>
            <p className="hero-para">soleBasket brings you the hottest kicks from all around. Click on explore all to check out our collection</p>
        </section>

        <div className="header-btn-container text-center">
            <Link to="/productpage" className="btn pill-btn pill-btn-lg btn-secondary">Explore All</Link>
        </div>
    </section>
    )
}

export {HeroSection}
