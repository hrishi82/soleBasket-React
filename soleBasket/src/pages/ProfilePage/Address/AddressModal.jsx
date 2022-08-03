import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useData } from "../../../context/dataContext";

export const AddressModal = () => {
  const { state, dispatch } = useData();

  const { addressFormData } = state;

  const [formData, setFormData] = useState(addressFormData);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setFormData(addressFormData);
  }, [addressFormData]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formData.id === "") {
      if (
        formData?.name &&
        formData?.address &&
        formData?.mobile &&
        formData?.pincode &&
        formData?.city &&
        formData?.state !== ""
      ) {
        dispatch({ type: "ADD_ADDRESS", payload: { ...formData, id: uuid() } });
        dispatch({ type: "RESET_ADDRESS" });
        dispatch({ type: "TOGGLE_ADDRESS_MODAL" });
      } else {
        setErrorMsg("Please provide proper details");
      }
    } else {
      dispatch({ type: "EDIT_ADDRESS", payload: formData });
      dispatch({ type: "RESET_ADDRESS" });
      dispatch({ type: "TOGGLE_ADDRESS_MODAL" });
    }
  };

  const dummyAddressHandler = () => {
    const dummyData = {
      id: uuid(),
      name: "Anuj Kumar",
      address: "DLF Heights, Electronic city",
      mobile: "123456789",
      pincode: "560105",
      city: "Bangalore",
      state: "Karnataka",
    };
    dispatch({ type: "ADD_ADDRESS", payload: dummyData });
    dispatch({ type: "RESET_ADDRESS" });
    dispatch({ type: "TOGGLE_ADDRESS_MODAL" });
  };

  const handleFormData = (e) => {
    setErrorMsg("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div
      className={`address-input-modal-container ${
        state.displayAddressModal ? "viewModal" : null
      }`}
    >
        <form onSubmit={(e) => formSubmitHandler(e)}>
          <div className="address-card">
            <section className="address-card-body-container">
              {errorMsg !== "" ? (
                <div className="address-card-input-wrapper address-input-error-cont text-center">
                  {errorMsg}
                </div>
              ) : null}
              <div className="address-card-input-wrapper">
                <label>Name</label>
                <input
                  className="address-card-input-txt"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={(e) => handleFormData(e)}
                />
              </div>
              <div className="address-card-input-wrapper">
                <label>Address</label>
                <input
                  className="address-card-input-txt"
                  type="text"
                  name="address"
                  value={formData?.address}
                  onChange={(e) => handleFormData(e)}
                />
              </div>

              <div className="address-card-field-splitter-container">
                <div className="address-card-input-wrapper">
                  <label>Mobile No.</label>
                  <input
                    className="address-card-input-txt"
                    type="number"
                    name="mobile"
                    value={formData?.mobile}
                    onChange={(e) => handleFormData(e)}
                  />
                </div>
                <div className="address-card-input-wrapper">
                  <label>Pincode</label>
                  <input
                    className="address-card-input-txt"
                    type="number"
                    name="pincode"
                    value={formData?.pincode}
                    onChange={(e) => handleFormData(e)}
                  />
                </div>
              </div>

              <div className="address-card-field-splitter-container">
                <div className="address-card-input-wrapper">
                  <label>City</label>
                  <input
                    className="address-card-input-txt"
                    type="text"
                    name="city"
                    value={formData?.city}
                    onChange={(e) => handleFormData(e)}
                  />
                </div>
                <div className="address-card-input-wrapper">
                  <label>State</label>
                  <input
                    className="address-card-input-txt"
                    type="text"
                    name="state"
                    value={formData?.state}
                    onChange={(e) => handleFormData(e)}
                  />
                </div>
              </div>
            </section>

            <section className="address-card-footer-container">
              <button
                className="btn outline-secondary-btn card-btn"
                type="submit"
              >
                Add Address
              </button>
              <button
          className="btn btn-secondary card-btn"
          onClick={dummyAddressHandler}
        >
          Auto-fill with dummy address
        </button>
            </section>
          </div>
        </form>

    </div>
  );
};
