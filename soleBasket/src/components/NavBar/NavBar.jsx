import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css"
import { SearchBar } from "./SearchBar/SearchBar";
import {useData} from "../../context/dataContext"
import {useAuth} from "../../context/authContext"
import { useState, useEffect } from "react";


const NavBar = () => {

  const {state, dispatch} = useData()
  const {cartlist, wishlist} = state

  const {token, setToken, setUser} = useAuth()
  const navigate = useNavigate()

  const [displaySearch, setDisplaySearch] = useState(false)


  useEffect(()=>{
    if(location.pathname === "/loginpage" || location.pathname === "/signuppage" || location.pathname === "/logoutpage"){
      setDisplaySearch(false)
    }else{
      setDisplaySearch(true)
    }
}, [location.pathname])

  const logoutHandler = (e) =>{
    e.preventDefault()
    localStorage.removeItem("login")
    setToken(null);
    setUser(null);
    dispatch({
      type: "SET_CART_LIST",
      payload: [] 
    });
  }

  return (
    <nav className="nav-wrapper">
      <nav className="nav-items-left">
        <h4 className="nav-title">
          <Link to="/" className="link-no-decor">
            soleBasket
          </Link>
        </h4>
      </nav>

      {/* <nav className="nav-items-center">
      {displaySearch && <SearchBar />}
      </nav> */}

      <nav className="nav-items-right">
      <Link to="/productpage" className="nav-link" onClick={()=>dispatch({type:"FILTER_BY_SEARCH", payload: ""})}>
          All Products
        </Link>

        {token ? <Link to="/logoutpage" className="nav-link" onClick={(e)=>logoutHandler(e)}>
          Logout
        </Link>: <Link to="/loginpage" className="nav-link">
          Login
        </Link>}

        <Link to="/wishlistpage" className="nav-link relative">
          <i className="far fa-heart"></i>
          {token && wishlist.length>0 &&<span className="badge-w-txt">{wishlist.length}</span>}
        </Link>
        <Link to="/cartpage" className="nav-link relative">
          <i className="far fa-shopping-cart"></i>
          {token && cartlist.length>0 && <span className="badge-w-txt">{cartlist.length}</span>}
        </Link>
        
        <Link to="/profilepage/profile" className="nav-link profile-nav-link">
          <i className="far fa-user-circle"></i>
        </Link>
      </nav>
    </nav>
  );
};

export {NavBar}
