import {Link, useNavigate} from "react-router-dom"
import {useData} from "../../../context/dataContext"
import "./collections.css"

const CollectionCard = ({data}) => {

  const navigate = useNavigate()

  const {dispatch} = useData()

  function cardHandler(){
    dispatch({type: "FILTER_BY_COLLECTION", payload: data})
  }

  return (
    <div className="collection-card">
      <div className="collection-card-img-box">
        <img src="https://res.cloudinary.com/dac2rwutk/image/upload/v1647700886/nelson-ndongala-qMfrID95uJI-unsplash_spracq.jpg" alt="image" className="img-responsive" />
      </div>

      <div className="collection-card-content">
        {/* <p className="collection-card-label">NEW ARRIVALS</p> */}
        <h3 className="collection-card-title">{data}</h3>
        <p className="collection-card-details">
          Check out this collection!
        </p>
        <Link
          to="/productpage"
          className="btn pill-btn btn-secondary collection-card-btn"
          onClick={cardHandler}
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export {CollectionCard}
