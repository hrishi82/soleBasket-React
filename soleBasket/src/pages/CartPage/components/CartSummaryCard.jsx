import "../../CartPage/cartpage.css"
import {useData} from "../../../context/dataContext"
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export const CartSummaryCard = () => {

    const {state} = useData()
    const {cartlist} = state;
    let location = useLocation();
    let navigate = useNavigate()

    const [inCartPage, setInCartPage] = useState(true)

    useEffect(()=>{
        if(location.pathname === "/cartpage"){
            setInCartPage(true)
        }else if(location.pathname === "/checkoutpage"){
            setInCartPage(false)
        }
    }, [location.pathname])


    const cartQty = cartlist.reduce((acc, curr)=> curr = Number(curr.qty)+Number(acc), 0)
    const cartPrice = cartlist.reduce((acc, curr)=> curr = Number(curr.price*curr.qty)+ Number(acc), 0)

    const discount = 999
    const deliveryFee = 99


    const checkoutHandler = () =>{
        if(inCartPage){
            navigate("/checkoutpage")
        }else{
            console.log("ok")
        }
        
    }

  return (
    <section className="cart-summary-container">
      <h3 className="cart-summary-heading">Price details</h3>
      <hr />

      <div className="cart-summary-price-content">
        <div className="cart-summary-price">
          <span>Price ({cartQty} items)</span>
          <span>&#8377; {cartPrice}</span>
        </div>

        <div className="cart-summary-price">
          <span>Discount</span>
          <span>- &#8377; {discount}</span>
        </div>
        <div className="cart-summary-price">
          <span>Delivery Charges </span>
          <span>&#8377; {deliveryFee}</span>
        </div>
      </div>

      <hr />
      <div className="cart-summary-price cart-summary-price-total">
        <span>
          <strong>Total amount</strong>
        </span>
        <span>
          &#8377; {cartPrice - (Number(discount) + Number(deliveryFee))}
        </span>
      </div>
      <hr />
      <p className="cart-summary-price-saving">
        You will save Rs.{Number(discount)} on this order!
      </p>
      <div className="cart-summary-btn-container">
        <button className="btn btn-primary" onClick={checkoutHandler}>{inCartPage && cartQty > 0  ? "Checkout": "Place Order"}</button>
      </div>
    </section>
  );
};
