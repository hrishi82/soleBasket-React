import "./productaside.css";
import { useData } from "../../../context/dataContext";

const ProductAside = () => {
  const { state, dispatch } = useData();

  const maxPrice = state.products.reduce(
    (acc, curr) => (Number(curr.price) > acc ? Number(curr.price) : acc),
    0
  );

  const Categories = ({ name }) => {
    return (
      <div className="radio-container filter-radio">
        <input
          type="checkbox"
          name="category"
          id={name}
          checked={state.filters.categories.includes(name)}
          onChange={() =>
            dispatch({ type: "FILTER_BY_CATEGORY", payload: name })
          }
        />
        <label htmlFor={name} className="radio-label">
          {name}
        </label>
      </div>
    );
  };

  const Collections = ({ name }) => {
    return (
      <div className="radio-container filter-radio">
        <input
          type="checkbox"
          name="collection"
          id={name}
          checked={state.filters.collections.includes(name)}
          onChange={() =>
            dispatch({ type: "FILTER_BY_COLLECTION", payload: name })
          }
        />
        <label htmlFor={name} className="radio-label">
          {name}
        </label>
      </div>
    );
  };

  const Rating = ({ rate }) => {
    return (
      <div className="radio-container filter-radio">
        <input
          type="radio"
          name="rating"
          checked={state.filters.rating === rate ? true : false}
          onChange={() => dispatch({ type: "FILTER_BY_RATING", payload: rate })}
          value={rate}
        />
        <label htmlFor="rating" className="radio-label">
          {rate} star & above
        </label>
      </div>
    );
  };

  return (
    <aside className="sidebar-wrapper">
      <div className="filter-close-btn-wrapper">
        <button
          className="btn outline-secondary-btn filter-close-btn"
          onClick={() => dispatch({ type: "TOGGLE_ASIDE_FILTER" })}
        >
          CLOSE
        </button>
      </div>

      <div className="sidebar-title-cont">
        <h3 className="sidebar-title">Filters</h3>
        <button
          onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
          className="sidebar-reset-btn"
        >
          CLEAR ALL
        </button>
      </div>

      {/* <div className="section-gutter-reg"></div> */}
      <hr className="filter-section-division" />

      <div className="sidebar-topic-cont">
        <h3 className="sidebar-topic">Price</h3>
        <div className="price-slider-container">
          <div className="price-slider-values">
            <span className="text-sm">0</span>
            <span className="text-sm">{Math.floor(maxPrice / 2)}</span>
            <span className="text-sm">{maxPrice}</span>
          </div>
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={state.filters.priceRange}
            className="range-slider price-slider"
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_PRICE_RANGE",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>

      {/* <div className="section-gutter-sm"></div> */}
      <hr className="filter-section-division" />

      <div className="sidebar-topic-cont">
        <h3 className="sidebar-topic">Categories</h3>
        {state.allCategories.map((el) => {
          return (
            <>
              <Categories key={el} name={el} />
            </>
          );
        })}
      </div>

      {/* <div className="section-gutter-sm"></div> */}
      <hr className="filter-section-division" />

      <div className="sidebar-topic-cont">
        <h3 className="sidebar-topic">Collections</h3>
        {state.allCollections.map((el) => {
          return (
            <>
              <Collections key={el} name={el} />
            </>
          );
        })}
      </div>

      {/* <div className="section-gutter-sm"></div> */}
      <hr className="filter-section-division" />

      <div className="sidebar-topic-cont">
        <h3 className="sidebar-topic">Rating</h3>
        {["4", "3", "2", "1"].map((el) => (
          <Rating key={el} rate={el} />
        ))}
      </div>

      {/* <div className="section-gutter-sm"></div> */}
      <hr className="filter-section-division" />

      <div className="sidebar-topic-cont">
        <h3 className="sidebar-topic">Sort By</h3>
        <div className="radio-container filter-radio">
          <input
            type="radio"
            name="price-sort"
            checked={state.filters.sortBy === "HIGH_TO_LOW" ? true : false}
            onChange={() =>
              dispatch({ type: "FILTER_BY_SORT", payload: "HIGH_TO_LOW" })
            }
          />
          <label htmlFor="price-sort" className="radio-label">
            Price - High to Low
          </label>
        </div>
        <div className="radio-container filter-radio">
          <input
            type="radio"
            name="price-sort"
            checked={state.filters.sortBy === "LOW_TO_HIGH" ? true : false}
            onChange={() =>
              dispatch({ type: "FILTER_BY_SORT", payload: "LOW_TO_HIGH" })
            }
          />
          <label htmlFor="price-sort" className="radio-label">
            Price - Low to High
          </label>
        </div>
      </div>

      <hr className="filter-section-division" />
      <div className="section-gutter-sm"></div>
    </aside>
  );
};

export { ProductAside };
