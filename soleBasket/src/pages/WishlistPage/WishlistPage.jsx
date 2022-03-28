import {useData} from "../../context/dataContext"
import {useAuth} from "../../context/authContext"
import "./wishlist.css"
import {ProductCard} from "../../pages/ProductPage/ProductCard/ProductCard"


const WishlistItems = () =>{
    const {state} = useData()

    return (
        <div className="wishlist-cards-container">
            {state.wishlist.map(el=><ProductCard key={el._id} data={el}/>)}
        </div>
    )
}

export const WishlistPage = () =>{

    const {token} = useAuth()
    return (
        <section className="wishlist-page-container">
        {(token) ? <h1>My Wishlist</h1> : <h1>Please login to add items to wishlist</h1>}
        {token && <WishlistItems/>}

 
    </section>
    )
}
