import { Link } from "react-router-dom";
import "./NavBar.css"
import "./SearchBar.css"

const NavBar = () => {
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
        <Link to="/" className="nav-link">
          Login
        </Link>
        <Link to="/" className="nav-link relative">
          <i className="far fa-heart"></i>
          <span className="badge-w-txt">9+</span>
        </Link>
        <Link to="/" className="nav-link relative">
          <i className="far fa-shopping-cart"></i>
          <span className="badge-w-txt">53</span>
        </Link>
      </nav>
    </nav>
  );
};

export {NavBar}
