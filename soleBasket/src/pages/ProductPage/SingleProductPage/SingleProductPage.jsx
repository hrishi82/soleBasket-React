import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../context/authContext";
import "./singleproductpage.css";
import {
  PostCartData,
  PostWishlistData,
  DeleteWishItem,
} from "../../../services/services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const SingleProductPage = () => {
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const { productID } = useParams();
  const { state, dispatch } = useData();
  const { token } = useAuth();

  const navigate = useNavigate();

  const productData = state.products.find((el) => el._id === productID);

  useEffect(() => {
    let findItemInCart = state.cartlist.find((el) => el?._id === productID);
    if (findItemInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [state.cartlist]);

  useEffect(() => {
    let findItemInWishlist = state.wishlist.find((el) => el?._id === productID);
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
        product: { ...productData, qty: 1 },
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
          productId: productData._id,
          encodedToken: token,
        });
      } else {
        response = await PostWishlistData({
          product: productData,
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

  return (
    <>
      <div className="single-prod-pg-main-container">
        <div className="single-prod-pg-img-container">
          <LazyLoadImage
            src={productData?.img}
            alt="product-image"
            className="img-responsive"
            effect="blur"
          />
        </div>
        <div className="single-prod-pg-master-content-container">
          <div className="single-prod-pg-content-wrapper">
            <h4 className="single-prod-pg-content-brand">
              {productData?.brand}
            </h4>
            <h4 className="single-prod-pg-content-product-name">
              {productData?.name}
            </h4>
            <h4 className="single-prod-pg-content-price">
              ₹ {productData?.price}
            </h4>
            <h4 className="single-prod-pg-content-price-info">
              MRP inclusive of all taxes
            </h4>
            <p className="single-prod-pg-content-description">
              {productData?.description}
            </p>
            <ul className="single-prod-pg-content-highlights">
              {productData?.producthighlights.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
          <div className="single-prod-pg-button-wrapper">
          <button
              className="btn outline-secondary-btn card-btn"
              onClick={wishListHandler}
              disabled={productData?.outofstock}
            >
              {inWishlist ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
            </button>
            <button
              className="btn btn-secondary card-btn"
              onClick={(e) => cartHandler(e)}
              disabled={productData?.outofstock}
            >
              {inCart ? "GO TO CART" : "ADD TO CART"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
