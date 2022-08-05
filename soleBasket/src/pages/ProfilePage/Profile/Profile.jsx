import { useAuth } from "../../../context/authContext"

export const Profile = () =>{
    const {user} = useAuth()
    return(
        <div>
            <h1 className="profile-pg-heading-text">Profile</h1>
            <hr className="profile-pg-section-seperator"/>
            <div className="profile-pg-content-container">
                <p >Name: {user?.name}</p>
                <p>E-mail: {user?.email}</p>
            </div>
        </div>
    )
}
