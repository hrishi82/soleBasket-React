import "./address.css";
import { useData } from "../../../context/dataContext";
import { AddressCard } from "./AddressCard";
import { AddressModal } from "./AddressModal";

export const Address = () => {
  const { state, dispatch } = useData();
  return (
    <div>
      <AddressModal />
      <div
        onClick={() => dispatch({ type: "TOGGLE_ADDRESS_MODAL" })}
        className={`addressmodal-bg-master-wrapper ${
          state.displayAddressModal ? "viewModal" : null
        }`}
      ></div>
      <h1 className="profile-pg-heading-text">Addresses</h1>
      <hr className="profile-pg-section-seperator" />
      <div className="profile-pg-content-container">
        {state.allAddresses.map((el) => (
          <AddressCard key={el?.id} data={el} />
        ))}
      </div>
      <button
        className="btn outline-secondary-btn card-btn"
        onClick={() => {
          dispatch({ type: "TOGGLE_ADDRESS_MODAL" });
          dispatch({ type: "RESET_ADDRESS" });
        }}
      >
        Add new address
      </button>
    </div>
  );
};
