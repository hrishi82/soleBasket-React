import { ProductCard } from "../ProductCard/ProductCard";
import { useFilterHook } from "../../../hooks/useFilterHook";
import { useData } from "../../../context/dataContext";
import {ProductAside} from "../ProductAside/ProductAside"
import "../ProductAside/productaside.css"

const ProductMain = () => {
  const { filteredData } = useFilterHook();

  const { state, dispatch } = useData();

  const asideHandler = () => {
    dispatch({ type: "TOGGLE_ASIDE_FILTER" });
  };



  return (
    <>
          {state.toggleAsideFilter && <ProductAside />}
      <div  onClick={()=>dispatch({type: "TOGGLE_ASIDE_FILTER"})} className={`aside-master-wrapper ${state.toggleAsideFilter ? "viewAsideDiv" : null}`}>   </div>

    <section className="products-container relative">

      <div className="products-container-action-nav">
        <h3 className="products-container-info-text">
          Showing {filteredData.length} Products{" "}
        </h3>
        <h3 className="products-container-info-text products-filter-selector-btn" onClick={asideHandler}>
          FILTERS
        </h3>
      </div>

      <div className="products-container-content">
        {filteredData.map((el) => {
          return (
              <ProductCard key={el?._id} data={el} />
          );
        })}
      </div>
    </section>
    </>
  );
};

export { ProductMain };
