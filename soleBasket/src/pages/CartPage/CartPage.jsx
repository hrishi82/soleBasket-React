import "../CartPage/cartpage.css"
import {useData} from "../../context/dataContext"
import {CartProductCard} from "../CartPage/components/CartProductCard"
import {useEffect, useState} from "react"

export const CartPage = () =>{
    const [showCartItem, setShowCartItem] = useState(false)
    const {state} = useData()
    const {cartlist} = state;

    useEffect(()=>{
        (cartlist.length!==0) ? setShowCartItem(true):setShowCartItem(false)
    })

    const cartQty = cartlist.reduce((acc, curr)=> curr = Number(curr.qty)+Number(acc), 0)
    const cartPrice = cartlist.reduce((acc, curr)=> curr = Number(curr.price)+ Number(acc), 0)

    const discount = 999
    const deliveryFee = 99

    const EmptyCart = () =>{
        return <h2>Empty Cart! Add items to continue</h2>
    }

    const CartContent = () =>{
        return (
            <>
            <section className="cart-page-contents">
                {cartlist.map(el=><CartProductCard data={el}/>)}
            </section>

            <section className="cart-summary-container">
                <h3 className="cart-summary-heading">Price details</h3>
                <hr/>

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

                <hr/>
                <div className="cart-summary-price cart-summary-price-total">
                    <span><strong>Total amount</strong></span>
                    <span>&#8377; {cartPrice - (Number(discount) + Number(deliveryFee))}</span>
                </div>
                <hr/>
                <p className="cart-summary-price-saving">You will save Rs.{Number(discount)} on this order!</p>
                <div className="cart-summary-btn-container">
                    <button className="btn btn-primary">Place order</button>    
                </div>

            </section>
            </>
        )
    }

    return(
        <main className="cart-page-container">
            { showCartItem ? <CartContent/>: <EmptyCart/>}
    </main>
    )
}
