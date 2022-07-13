import "./navaside.css";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useData } from "../../context/dataContext";

export const NavAside = () => {
  const { token, setToken, setUser } = useAuth();
  const { state, dispatch } = useData();
  const { displayNavSidebar } = state;
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    setToken(null);
    setUser(null);
    dispatch({
      type: "SET_CART_LIST",
      payload: [],
    });
    dispatch({ type: "TOGGLE_NAV_SIDEBAR" })
  };

  return (
    <div>
      {displayNavSidebar && (
        <aside className="sidebar">
          <ul className="sidebar-list-container">
            <li className="sidebar-li-item">
              <Link
                to="/productpage"
                className="sidebar-links"
                onClick={() => {
                  dispatch({ type: "CLEAR_ALL_FILTERS" })
                  dispatch({ type: "TOGGLE_NAV_SIDEBAR" })
                }}
              >
                ALL PRODUCTS
              </Link>
            </li>
            <li className="sidebar-li-item">
              <Link
                to="/wishlistpage"
                className="sidebar-links"
                onClick={() => dispatch({ type: "TOGGLE_NAV_SIDEBAR" })}
              >
                WISHLIST
              </Link>
            </li>
            <li className="sidebar-li-item">
              <Link
                to="/cartpage"
                className="sidebar-links"
                onClick={() => dispatch({ type: "TOGGLE_NAV_SIDEBAR" })}
              >
                CART
              </Link>
            </li>
          </ul>

          <ul className="sidebar-list-container-bottom">
            <li className="sidebar-li-item">
              {token && (
                <Link
                  to="/profilepage/profile"
                  className="sidebar-links"
                  onClick={() => dispatch({ type: "TOGGLE_NAV_SIDEBAR" })}
                >
                  PROFILE
                </Link>
              )}
            </li>
            <li className="sidebar-li-item">
              {token ? (
                <Link
                  to="/logoutpage"
                  className="sidebar-links"
                  onClick={(e) => logoutHandler(e)}
                >
                  LOGOUT{" "}
                </Link>
              ) : (
                <Link
                  to="/loginpage"
                  className="sidebar-links"
                  onClick={() => dispatch({ type: "TOGGLE_NAV_SIDEBAR" })}
                >
                  LOGIN
                </Link>
              )}
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
};
