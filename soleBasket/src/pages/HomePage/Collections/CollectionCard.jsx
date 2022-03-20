import {Link} from "react-router-dom"
const CollectionCard = () => {
  return (
    <div className="collection-card">
      <div className="collection-card-img-box">
        <img src="https://res.cloudinary.com/dac2rwutk/image/upload/v1647700886/nelson-ndongala-qMfrID95uJI-unsplash_spracq.jpg" alt="image" className="img-responsive" />
      </div>

      <div className="collection-card-content">
        <p className="collection-card-label">NEW ARRIVALS</p>
        <h3 className="collection-card-title">Winter Collection</h3>
        <p className="collection-card-details">
          Check out our best winter collection to stay warm in style this season
        </p>
        <Link
          to="/"
          className="btn pill-btn btn-secondary collection-card-btn"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export {CollectionCard}
