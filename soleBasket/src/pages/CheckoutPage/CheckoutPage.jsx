import { useData } from "../../context/dataContext";
import { useEffect, useState } from "react";
import { CartSummaryCard } from "../CartPage/components/CartSummaryCard";
import { AddressCard } from "../ProfilePage/Address/AddressCard";
import {AddressModal} from "../ProfilePage/Address/AddressModal"
import "./checkout.css";

export const CheckoutPage = () => {
  const { state, dispatch } = useData();

  const [addressListData, setAddressListData] = useState(state.allAddresses)

  useEffect(()=>{
    setAddressListData(state.allAddresses)
  }, [state.allAddresses])

  return (
    <>
      <AddressModal />
      <div
        onClick={() => dispatch({ type: "TOGGLE_ADDRESS_MODAL" })}
        className={`addressmodal-bg-master-wrapper ${
          state.displayAddressModal ? "viewModal" : null
        }`}
      ></div>

      <div className="checkout-pg-master-container">
        <div className="checkput-pg-address-container">
          <h2 className="text-center">Address Selection</h2>
          {addressListData.map((el) => {
            return (
              <div
                className="checkout-pg-address-selection-card-wrapper"
                key={el?.id}
              >
                <input
                  type="radio"
                  id={el?.id}
                  name="address-selection"
                  value={el?.id}
                  onClick={() => console.log(el.id)}
                />
                 
                <label htmlFor={el?.id}>
                  <AddressCard key={el?.id} data={el} />
                </label>
              </div>
            );
          })}
          <button
            className="btn btn-secondary checkout-pg-add-address-btn"
            onClick={() => dispatch({ type: "TOGGLE_ADDRESS_MODAL" })}
          >
            Add new address
          </button>
        </div>
        <div className="checkput-pg-order-container">
          <CartSummaryCard />
        </div>
      </div>
    </>
  );
};
