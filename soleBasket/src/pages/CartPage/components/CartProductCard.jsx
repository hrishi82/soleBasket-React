
import {useData} from "../../../context/dataContext"
import {useAuth} from "../../../context/authContext"
import axios from "axios";
import {IncDecCart, DeleteCart} from "../../../services/services"

export const CartProductCard = ({data}) =>{
    const {state, dispatch} = useData();
    const {token}  = useAuth();
    
    const {
        id,
        _id,
        name,
        brand,
        price,
        qty,
        img
      } = data;


    const deleteItem = async () =>{
        try {
            const response = await DeleteCart({ productId: _id, encodedToken: token });
            if (response.status === 200 || response.status === 201) {
              dispatch({
                type: "SET_CART_LIST",
                payload: response.data.cart,
              });
            }
        }catch (err) {
            console.log(err);
        }
    };
    

    const incrementHandler = async () =>{
        try{
            const response  = await IncDecCart({encodedToken: token, productId: _id, type: "increment"})
            if (response.status===200 || response.status === 201){
                dispatch({type: "SET_CART_LIST", payload: response.data.cart })
            }
        }catch(err){
            console.log(err)
        }
    }

    const decrementHandler = async () =>{
        if (qty===1){
            deleteItem()
            return;
        }

        try{
            const response = await IncDecCart({encodedToken: token, productId: _id, type: "decrement"})
            if (response.status===200 || response.status === 201){
                dispatch({type: "SET_CART_LIST", payload: response.data.cart })
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="prod-card-landscape relative">

        <section className="prod-card-landscape-image-box">
            <img  src={img} alt="landscape" className='img-responsive'/>
        </section>

        <section className="prod-card-landscape-body">
            <section className="product-card-body">
                <h5 className="product-card-title"><span className='text-reg'>{brand}</span></h5>
                <h5 className="product-card-title"><span className='text-reg'>{name}</span></h5>
                <div className="product-card-price-wrapper">
                    <div className="product-card-price-section">
                        <h5 className="product-card-prod-price">{price}</h5>
                        {/* <h6 className="product-card-prod-prev-price">Rs.14499</h6> */}
                    </div>
                    {/* <div className="product-card-price-subinfo">
                        <h6 className="product-card-off-percent">(33% off)</h6>
                    </div> */}
                </div>
            </section>

            <div className="item-quantity-container">
                <span className="item-quantity-title">Quantity:</span>
                <span className="item-quantity-icon-btn" onClick={decrementHandler}><i className="fas fa-minus-circle"></i></span>
                <span className="item-quantity">{qty}</span>
                <span className="item-quantity-icon-btn" onClick={incrementHandler}><i className="fas fa-plus-circle"></i></span>
            </div>
    
            <section className="product-card-btn-wrapper">
                
                <button className="btn outline-secondary-btn card-btn">Move to Wishlist</button>
                <button className="btn outline-secondary-btn card-btn" onClick={deleteItem}>Remove from Cart</button>

            </section>
        </section>

    </div> 
    )
}
