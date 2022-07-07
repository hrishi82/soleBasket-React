import "./productcard.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import {
  PostCartData,
  PostWishlistData,
  DeleteWishItem,
} from "../../../services/services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = ({ data }) => {
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const navigate = useNavigate();

  const { state, dispatch } = useData();
  const { token } = useAuth();

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
    outofstock,
  } = data;

  useEffect(() => {
    let findItemInCart = state.cartlist.find((el) => el._id === _id);
    if (findItemInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [state.cartlist]);

  useEffect(() => {
    let findItemInWishlist = state.wishlist.find((el) => el._id === _id);
    if (findItemInWishlist) {
      setInWishlist(true);
    } else {
      setInWishlist(false);
    }
  }, [state.wishlist]);

  async function cartHandler(e) {
    if (!token) {
      navigate("/loginpage");
      return;
    }

    if (e.target.innerText === "Go To Cart") {
      navigate("/cartpage");
      return;
    }

    try {
      let response;
      response = await PostCartData({
        product: { ...data, qty: 1 },
        encodedToken: token,
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "SET_CART_LIST",
          payload: response.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  const wishListHandler = async () => {
    try {
      if (!token) {
        navigate("/loginpage");
        return;
      }

      let response = null;
      if (inWishlist) {
        response = await DeleteWishItem({
          productId: _id,
          encodedToken: token,
        });
      } else {
        response = await PostWishlistData({
          product: data,
          encodedToken: token,
        });
      }

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "SET_WISH_LIST",
          payload: response.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const navigateToProductFunc = () => {
    navigate(`/singleproductpage/${_id}`);
  };

  return (
    <div className="product-card-grid-master relative">
      {outofstock ? <h4 className="out-of-stock-text">Out Of Stock</h4> : null}
      <div
        className={`product-card relative ${
          outofstock ? "out-of-stock" : null
        }`}
      >
        <span className="product-card-badge absolute" onClick={wishListHandler}>
          <i
            className={
              inWishlist ? "fas fa-heart wishlist-icon" : "far fa-heart"
            }
          ></i>
        </span>

        <div className="product-card-img-box" onClick={navigateToProductFunc}>
          <LazyLoadImage
          src={img}
          alt="product-image"
          className="img-responsive"
          effect="blur"
        />
          {/* <img src={img} alt="product-image" className="img-responsive" /> */}
        </div>

        <section className="product-card-body">
          <section
            className="product-card-body-content"
            onClick={navigateToProductFunc}
          >
            <div className="product-card-title-div">
              <h5 className="product-card-title">{brand}</h5>
              <span className="product-card-rating-badge">
                <i className="fas fa-star">
                  <span className="card-rating-text">{rating}</span>
                </i>
              </span>
            </div>
            <span className="product-card-subtitle">{name}</span>
            <div className="product-card-price-wrapper">
              <div className="product-card-price-section">
                <h5 className="product-card-prod-price">₹ {price}</h5>
              </div>
            </div>
          </section>

          <section className="product-card-btn-wrapper">
            <button
              className="btn card-btn"
              onClick={(e) => cartHandler(e)}
              disabled={outofstock}
            >
              {inCart ? "Go To Cart" : "Add to Cart"}
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export { ProductCard };
