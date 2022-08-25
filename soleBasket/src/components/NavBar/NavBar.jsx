import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { useData } from "../../context/dataContext";
import { useAuth } from "../../context/authContext";
import { useState, useEffect } from "react";
import {CategoryBar} from "./CategoryBar/CategoryBar"

const NavBar = () => {
  const { state, dispatch } = useData();
  const { cartlist, wishlist } = state;

  const { token, setToken, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const [displaySearch, setDisplaySearch] = useState(false);
  const [toggleMobileSearch, setToggleMobileSearch] = useState(false);
  const [toggleCategoryBar, setToggleCategoryBar] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/loginpage" ||
      location.pathname === "/signuppage" ||
      location.pathname === "/logoutpage"
    ) {
      setDisplaySearch(false);
    } else {
      setDisplaySearch(true);
    }

    if(location.pathname === "/"){
      setToggleCategoryBar(true)
    }else{
      setToggleCategoryBar(false)
    }
  }, [location.pathname]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    setToken(null);
    setUser(null);
    dispatch({
      type: "SET_CART_LIST",
      payload: [],
    });
    dispatch({
      type: "SET_WISH_LIST",
      payload: [],
    });
  };

  const toggleSidebar = () => {};

  return (
    <div className="nav-master-container">
      <nav className="nav-wrapper">
        <nav className="nav-items-left">
          <h4 className="nav-title">
            <Link to="/" className="link-no-decor">
              soleBasket
            </Link>
          </h4>
        </nav>

        <nav className="nav-items-center">{displaySearch && <SearchBar />}</nav>

        <nav className="nav-items-right">
          <Link
            to="/productpage"
            className="nav-link nav-link-lg"
            onClick={() => {
              dispatch({ type: "FILTER_BY_SEARCH", payload: "" })
              dispatch({ type: "CLEAR_ALL_FILTERS" })
            }}
          >
            All Products
          </Link>

          {token ? (
            <Link
              to="/logoutpage"
              className="nav-link nav-link-lg"
              onClick={(e) => logoutHandler(e)}
            >
              Logout
            </Link>
          ) : (
            <Link to="/loginpage" className="nav-link nav-link-lg">
              Login
            </Link>
          )}

          <Link to="/wishlistpage" className="nav-link nav-link-lg relative">
            <i className="far fa-heart"></i>
            {token && wishlist.length > 0 && (
              <span className="badge-w-txt">{wishlist.length}</span>
            )}
          </Link>
          <Link to="/cartpage" className="nav-link nav-link-lg relative">
            <i className="far fa-shopping-cart"></i>
            {token && cartlist.length > 0 && (
              <span className="badge-w-txt">{cartlist.length}</span>
            )}
          </Link>

          <Link
            to="/profilepage/profile"
            className="nav-link nav-link-lg profile-nav-link"
          >
            <i className="far fa-user-circle"></i>
          </Link>

          <i
            className="far fa-search nav-menu-option"
            onClick={() => setToggleMobileSearch(!toggleMobileSearch)}
          ></i>
          <i
            className="fas fa-bars nav-menu-option"
            onClick={() => dispatch({ type: "TOGGLE_NAV_SIDEBAR" })}
          ></i>
        </nav>
      </nav>
      {toggleMobileSearch && <div className="mobile-search-master-container"><SearchBar /></div>}
      {toggleCategoryBar && <div className="category-bar-master-container"><CategoryBar /></div>}
    </div>

  );
};

export { NavBar };
