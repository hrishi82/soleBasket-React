import "./productcard.css";

const ProductCard = ({ data }) => {
  const {
    id,
    _id,
    name,
    brand,
    price,
    gender,
    category,
    rating,
    collection,
    size,
    img,
  } = data;

  return (
    <div className="product-card relative">
      <span className="product-card-badge absolute">
        <i className="far fa-heart"></i>
      </span>

      <span className="product-card-rating-badge absolute">
        <i className="fas fa-star">
          <span className="card-rating-text">{rating}</span>
        </i>
      </span>

      <div className="product-card-img-box">
        <img
          src={img ? img : "../../../assets/images/noimg.png"}
          alt="product-image"
          className="img-responsive"
        />
      </div>

      <section className="product-card-body">
        <section className="product-card-body-content">
          <h5 className="product-card-title">{brand}</h5>
          <span className="product-card-subtitle">{name}</span>
          <div className="product-card-price-wrapper">
            <div className="product-card-price-section">
              <h5 className="product-card-prod-price">{price}</h5>
            </div>
          </div>
        </section>

        <section className="product-card-btn-wrapper">
          <button className="btn card-btn">Add to Cart</button>
        </section>
      </section>
    </div>
  );
};

export { ProductCard };
