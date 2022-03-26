import "./productpage.css"
import {ProductAside} from "./ProductAside/ProductAside"
import {ProductMain} from "./ProductMain/ProductMain"

const ProductPage = () =>{
    return (
        <div className="product-page-container">
            <ProductAside/>
            <ProductMain/>
        </div>
    )
}

export {ProductPage}
