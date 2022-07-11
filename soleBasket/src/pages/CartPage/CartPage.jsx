import "../CartPage/cartpage.css";
import { useData } from "../../context/dataContext";
import { CartProductCard } from "../CartPage/components/CartProductCard";
import { useEffect, useState } from "react";
import { CartSummaryCard } from "./components/CartSummaryCard";

export const CartPage = () => {
  const [showCartItem, setShowCartItem] = useState(false);
  const { state } = useData();
  const { cartlist } = state;

  useEffect(() => {
    cartlist.length !== 0 ? setShowCartItem(true) : setShowCartItem(false);
  }, [cartlist]);

  const EmptyCart = () => {
    return <h2>Empty Cart! Add items to continue</h2>;
  };

  const CartContent = () => {
    return (
      <>
        <section className="cart-page-contents">
          {cartlist.map((el) => (
            <CartProductCard data={el} key={el?._id}/>
          ))}
        </section>

        <CartSummaryCard />
      </>
    );
  };

  return (
    <main className="cart-page-container">
      {showCartItem ? <CartContent /> : <EmptyCart />}
    </main>
  );
};
