import "./productpage.css"
import {ProductMain} from "./ProductMain/ProductMain"
import { useData } from "../../context/dataContext";

const ProductPage = () =>{
    const {state} = useData()
    return (
        <div className="product-page-container">
            <ProductMain/>
        </div>
    )
}

export {ProductPage}
