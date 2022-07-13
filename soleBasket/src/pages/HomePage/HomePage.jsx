import "./HomePage.css"
import {HeroSection} from "./HeroSection.jsx"
import {Collections} from "./Components/Collections/Collections.jsx"
import {TrendingHero} from "./Components/TrendingHero/TrendingHero.jsx"



const HomePage = () => {

    return (
        <div className="main-container">
            <HeroSection />
            <div className="section-gutter-md"></div>
            <TrendingHero />
            <div className="section-gutter-md"></div>
            <Collections/>
        </div>
    )
}

export {HomePage} 
