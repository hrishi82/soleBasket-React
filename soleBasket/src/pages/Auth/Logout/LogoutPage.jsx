import {Link} from "react-router-dom"

export const LogoutPage = () =>{
    return (
        <div className="auth-page-container">
        <div className="logout-container">

                <div>
                    <h3 className="text-md">You've been sucessfully logged out!</h3>
                    <div className="section-gutter-sm"></div>
                    <Link to="/loginpage" className="btn pill-btn">Login again</Link>    
                </div>

                <div className="logout-img-container">
                    <img src="https://res.cloudinary.com/dac2rwutk/image/upload/v1647700862/logout_akelzz.jpg" alt="logout-image" className="img-responsive" />
                </div>
 
        </div>
    </div>
    )
}
