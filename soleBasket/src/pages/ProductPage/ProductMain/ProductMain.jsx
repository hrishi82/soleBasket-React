import { ProductCard } from "../ProductCard/ProductCard";
import { useFilterHook } from "../../../hooks/useFilterHook";

const ProductMain = () => {
  const { filteredData } = useFilterHook()
  return (
    <section className="products-container">
      <h3 className="products-container-info-text">Showing {filteredData.length} Products </h3>
      <div className="products-container-content">
        {filteredData.map((el) => {
          return (
            <>
              <ProductCard key={el._id} data={el} />
            </>
          );
        })}
      </div>
    </section>
  );
};

export { ProductMain };
