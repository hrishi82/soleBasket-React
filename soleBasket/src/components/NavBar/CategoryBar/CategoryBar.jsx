
import { Link } from "react-router-dom";
import {useData} from "../../../context/dataContext"
import "./categorybar.css"

const CategoryLinks = ({name}) =>{

  const {dispatch} = useData()

  function categoryHandler(){
    dispatch({type: "FILTER_BY_CATEGORY", payload: name})
  }
  
  return (
  <div className="category-wrapper-box">
    <Link to="/productpage" className="link-no-decor category-name" onClick={categoryHandler}>{name}</Link>
  </div>
  )
}

export const CategoryBar = () => {

  const {state} = useData()

  return (
    <section className="category-bar-container">
      {state.allCategories.map(el=><CategoryLinks key={el} name={el}/>)}

    </section>
  );
};

