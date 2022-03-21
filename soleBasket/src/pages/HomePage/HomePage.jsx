import "./HomePage.css"
import {Category} from "./Category/Category.jsx"
import {HeroSection} from "./HeroSection.jsx"
import {Collections} from "./Collections/Collections.jsx"

const HomePage = () => {
    return (
        <div className="main-container">
            <Category/>
            <HeroSection/>
            <div className="section-gutter-md"></div>
            <Collections/>
        </div>
    )
}

export {HomePage} 
