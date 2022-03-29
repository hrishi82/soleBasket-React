
import { Link } from "react-router-dom";
import {useData} from "../../../context/dataContext"

const CategoryLinks = ({name}) =>{

  const {dispatch} = useData()

  function categoryHandler(){
    dispatch({type: "FILTER_BY_CATEGORY", payload: name})
  }
  
  return (
  <div className="header-gender-wrapper-box">
    <Link to="/productpage" className="link-no-decor gender-text" onClick={categoryHandler}>{name}</Link>
  </div>
  )
}

const Category = () => {

  const {state} = useData()

  return (
    <section className="header-gender-container">
      {state.allCategories.map(el=><CategoryLinks name={el}/>)}

    </section>
  );
};

export { Category }
