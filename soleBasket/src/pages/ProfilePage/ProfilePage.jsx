import { NavLink, Outlet } from "react-router-dom";
import "./profile.css"

export const ProfilePage = () => {

    const toggleActive = ({ isActive }) => {
        return isActive
          ? 'profile-page-nav-link profile-pg-link-active'
          : 'profile-page-nav-link';
      };
  return (
    <>
      <div className="profilepage-container">
        <div className="profilepage-links-container">
        <NavLink to={'/profilepage/profile'} className={toggleActive}>
            Profile 
          </NavLink>
        <NavLink to={'/profilepage/address'} className={toggleActive}>
            Address
          </NavLink>
        <NavLink to={'/profilepage/orderhistory'} className={toggleActive}>
            Order History
          </NavLink>
        </div>
        <div className="profilepage-outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
