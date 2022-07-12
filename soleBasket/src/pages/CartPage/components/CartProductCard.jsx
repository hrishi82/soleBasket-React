
import {useData} from "../../../context/dataContext"
import {useAuth} from "../../../context/authContext"
import {IncDecCart, DeleteCart, PostWishlistData} from "../../../services/services"
import "./cartproductcard.css"

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

    const sendToWishlistHandler = async () =>{
        try{
            if(!token){
                navigate("/loginpage")
                return
              }
            
            const itemCheck  = state.wishlist.some(el=>el._id === data._id)

            let response = null;
            if(itemCheck){
                deleteItem()
            }else{
                response = await PostWishlistData({
                    product: data,
                    encodedToken: token,
                  });
                if (response.status === 200 || response.status === 201) {
                dispatch({
                    type: "SET_WISH_LIST",
                    payload: response.data.wishlist
                });
                deleteItem()
                }
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
                <h5 className="product-card-title">{brand}</h5>
                <h5 className="product-card-product-name">{name}</h5>
                <div className="product-card-price-wrapper">
                    <div className="product-card-price-section">
                        <h5 className="product-card-prod-price"> ₹ {price}</h5>
                    </div>
                </div>
            </section>

            <div className="item-quantity-container">
                <span className="item-quantity-title">Quantity:</span>
                <span className="item-quantity-icon-btn" onClick={decrementHandler}><i className="fas fa-minus-circle"></i></span>
                <span className="item-quantity">{qty}</span>
                <span className="item-quantity-icon-btn" onClick={incrementHandler}><i className="fas fa-plus-circle"></i></span>
            </div>
    
            <section className="product-card-btn-wrapper">
                
                <button className="btn outline-secondary-btn card-btn" onClick={sendToWishlistHandler}>Move to Wishlist</button>
                <button className="btn outline-secondary-btn card-btn" onClick={deleteItem}>Remove from Cart</button>

            </section>
        </section>

    </div> 
    )
}
