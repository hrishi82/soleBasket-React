import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"
import "./SearchBar.css"
import {useData} from "../../context/dataContext"
import {useAuth} from "../../context/authContext"


const NavBar = () => {

  const {state, dispatch} = useData()
  const {cartlist, wishlist} = state

  const {token, setToken, setUser} = useAuth()
  const navigate = useNavigate()


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

      <nav className="nav-items-center">
        <div className="search-wrapper nav-search-bar">
          <input
            type="text"
            placeholder="Search.."
            name="search-bar"
            className="search-bar"
          />
          <button type="submit" className="search-bar-btn">
            <i className="far fa-search"></i>
          </button>
        </div>
      </nav>

      <nav className="nav-items-right">
      <Link to="/productpage" className="nav-link">
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
      </nav>
    </nav>
  );
};

export {NavBar}
