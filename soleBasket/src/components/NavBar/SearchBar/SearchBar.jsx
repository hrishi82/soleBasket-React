import "./SearchBar.css";
import { useEffect, useState } from "react";
import { useData } from "../../../context/dataContext";
import { useNavigate, useLocation } from "react-router-dom";

export const SearchBar = () => {

  const location = useLocation()
  const { state, dispatch } = useData();

  const navigate = useNavigate();

  const [searchActive, setSearchActive] = useState(false);
  const [goButtonActive, setGoButtonActive] = useState(false);

  const searchHandler = (e) => {
    if (e.target.value !== "") {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
    dispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value });
  };


  useEffect(()=>{
    if(location.pathname === "/productpage"){
      setGoButtonActive(false)
    }else{
      setGoButtonActive(true)
    }
  }, [location.pathname])

  return (
      <div className="search-wrapper nav-search-bar relative">
        <input
          type="text"
          placeholder="Search by name.."
          name="search-bar"
          className="search-bar"
          value={state.filters.search}
          onChange={(e) => searchHandler(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && state.filters.search !== "") {
              navigate("/productpage");
            }
          }}
        />
        <button type="submit" className="search-bar-btn">
          {searchActive ? (
            <i
              className="fas fa-times"
              onClick={() => {
                dispatch({ type: "FILTER_BY_SEARCH", payload: "" });
                setSearchActive(false);
              }}
            ></i>
          ) : (
            <i className="far fa-search"></i>
          )}
        </button>
        {goButtonActive && searchActive&& <button className="btn btn-secondary pill-btn search-bar-go-btn" onClick={()=>navigate("/productpage")}>GO</button>}
      </div>
  );
};
