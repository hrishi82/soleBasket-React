import "./productcard.css";
import axios from "axios"
import {useState, useEffect} from "react"
import {useData} from "../../../context/dataContext"
import {useAuth} from "../../../context/authContext"
import { Link, useNavigate } from 'react-router-dom';
import {PostCartData} from "../../../services/services"

const ProductCard = ({ data }) => {
  const [inCart, setInCart] = useState(false)
  const [inWishlist, setInWishlist] = useState(false)
  const navigate = useNavigate()

  const {state, dispatch} = useData()
  const {token} = useAuth();

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
    img
  } = data;

  useEffect(()=>{
    let findItemInCart = state.cartlist.find(el=>el._id === _id);
    if (findItemInCart){
      setInCart(true)
    }else{
      setInCart(false)
    }
  }, [state.cartlist])


  async function cartHandler(e){

    try{
      if (!token){
        navigate("/loginpage")
        return
      }
  
      if (e.target.innerText === "Go To Cart"){
        navigate("/cartpage")
        return
      }
      
      let response;
      response = await PostCartData({
        product: {...data, qty: 1}, encodedToken: token
      })

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "SET_CART_LIST",
          payload: response.data.cart
        });
      }

    }catch (err) {
      console.log(err);
    }

 
  }

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
          <button className="btn card-btn" onClick={(e)=>cartHandler(e)}>{inCart ? "Go To Cart": "Add to Cart"}</button>
        </section>
      </section>
    </div>
  );
};

export { ProductCard };
