import "./address.css";
import { useData } from "../../../context/dataContext";

export const AddressCard = ({ data }) => {

  
  const { name, address, city, mobile, pincode, state } = data;

  const { dispatch} = useData()

  const editHandler = () =>{
   dispatch({type:"SET_ADDRESS", payload:data})
   dispatch({type:"TOGGLE_ADDRESS_MODAL"})
  }
  return (
    <div className="addresscard-main-container">
      <div className="addresscard-data-container">
        <p>{name}</p>
        <p>{address}</p>
        <p>+91-{mobile}</p>
        <p>{pincode}</p>
        <p>{city}</p>
        <p>{state}</p>
      </div>

      <div className="addresscard-action-btn-container">
        <button className="addresscard-action-btn" onClick={editHandler}>EDIT</button>
        <button className="addresscard-action-btn" onClick={()=>dispatch({type:"DELETE_ADDRESS", payload:data})}>DELETE</button>
      </div>
    </div>
  );
};
