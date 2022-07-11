import "./SearchBar.css";
import { useEffect, useState } from "react";
import { useData } from "../../../context/dataContext";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {

    const {state, dispatch} = useData()

    const navigate = useNavigate()

  const [searchActive, setSearchActive] = useState(false);

  const searchHandler = (e) =>{
    dispatch({type:"FILTER_BY_SEARCH", payload: e.target.value})
    setSearchActive(true)
  }

  useEffect(()=>{
    if(state.filters.search === ""){
        setSearchActive(false)
    }
  }, [state.filters.search])

  return (
    <div className="search-wrapper nav-search-bar relative">
      <input
        type="text"
        placeholder="Search.."
        name="search-bar"
        className="search-bar"
        value={state.filters.search}
        onChange={(e)=>searchHandler(e)}
        onKeyDown={(e)=>{
          if(e.key==="Enter" && state.filters.search !== ""){
            navigate("/productpage")
          }
        }}
      />
      <button type="submit" className="search-bar-btn">
        {searchActive ? (
          <i
            className="fas fa-times"
            onClick={()=>{
                dispatch({type:"FILTER_BY_SEARCH", payload: ""})
                setSearchActive(false)
            }}
          ></i>
        ) : (
          <i className="far fa-search"></i>
        )}
      </button>
    </div>
  );
};
