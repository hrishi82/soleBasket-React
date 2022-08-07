import {useData} from "../../context/dataContext"
import {useAuth} from "../../context/authContext"
import "./wishlist.css"
import {ProductCard} from "../../pages/ProductPage/ProductCard/ProductCard"
import { useState,useEffect } from "react"


const WishlistItems = () =>{
    const {state} = useData()

    return (
        <div className="wishlist-cards-container">
            {state.wishlist.map(el=><ProductCard key={el._id} data={el}/>)}
        </div>
    )
}

const EmptyWishlist = () => {
    return <h2 className="text-center">Empty Wishlist! Add items to continue</h2>;
  };

export const WishlistPage = () =>{

    const [showWishlist, setShowWishlist] = useState(false)

    const { state } = useData();
    const { wishlist } = state;

    useEffect(() => {
        wishlist.length !== 0 ? setShowWishlist(true) : setShowWishlist(false);
      }, [wishlist]);

    const {token} = useAuth()
    return (
        <section className="wishlist-page-container">
        {(token) ? <h1>My Wishlist</h1> : <h1>Please login to add items to wishlist</h1>}
        <div className="section-gutter-sm"></div>
        {token && showWishlist ? <WishlistItems/>: <EmptyWishlist/>}

 
    </section>
    )
}
