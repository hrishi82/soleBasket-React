import {Link} from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useData } from "../../../../context/dataContext";

export const TrendingHero = () =>{

    const {dispatch} = useData()
    return (
        <section className="hero-container">
        <div className="hero-img-box">
        <LazyLoadImage
            src="https://res.cloudinary.com/dac2rwutk/image/upload/v1657677466/b8d7d08d-39eb-4311-8be5-a502e89fbadc_cbppxl.webp" 
            alt="hero-image" 
            className="img-responsive hero-img"
            effect="blur"
        />
        </div>

        <section className="hero-text-container text-center">
            <small>Summer Essentials</small>
            <h2 className="hero-heading-text">NEVER DONE SUMMERING</h2>
            <p className="hero-para">Play. Let loose. Repeat. This season, turn it up in styles made for living life to the max.</p>
        </section>

        <div className="header-btn-container text-center">
            <Link to="/productpage" className="btn pill-btn pill-btn-lg btn-secondary" onClick={()=> dispatch({type: "CARD_FILTER_BY_COLLECTION", payload: "SUMMER"})}>Shop Now</Link>
        </div>

    </section>
    )
}

