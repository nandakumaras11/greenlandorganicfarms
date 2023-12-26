import { useEffect, useState,useReducer } from "react";
import { getAddress } from "./API";
import { httpRequest } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import "./Order.css";
// import { Link } from "react-router-dom";

const Manageaddress = () => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddress().then((data) => {
      setAddress(data);
    });
  }, []);
  const setAddressCallBack = (data) => {
    console.log(address);
    setAddress(data);
  };
  const [viewForm,setForm]=useState(false)
  // console.log(viewForm)
  // console.log(address)
  const changeviewForm=()=>{
    setForm(!viewForm);
  }
  return (
    <>
      {/* <h1>Manageaddress page</h1> */}
      <div className="orderContainer">
        
        <div className={viewForm?"cancel":"orderDetails"}>
          <div className="order_id font12" onClick={()=>setForm(!viewForm)}>
            <b>
          
           {viewForm?( ""  ):(<span className="pointer"> <i className="fa fa-plus" aria-hidden="true" ></i>ADD A NEW ADDRESS</span> )}

            </b>
          </div>
          {viewForm?<Addaddress  changeviewForm={changeviewForm} setAddressCallBack={setAddressCallBack}/>: ""}
        </div> 
        </div>
      {address.map((oneAddress, index) => {
        return (
          <Oneaddress
            key={index}
            addressObj={oneAddress}
            setAddressCallBack={setAddressCallBack}
          />
        );
      }
      )}
    </>
  )
}

export default Manageaddress;


export const Oneaddress = ({ addressObj, setAddressCallBack }) => {
  // let addressid=JSON.parse(addressObj.address_id)
  const { address, address_id } = addressObj
  const deleteAddress = (event, address_id) => {
    httpRequest({ address_id }, "deleteAddress.php").then(() => {
      getAddress().then((data) => {
        setAddressCallBack(data);
      });
    });
  }
  const editAddress = (event, address_id) => {

  }
  return (
    <>
      <div>
        <div className="orderContainer">
          <div className="orderDetails">
            <div className="order_id font12">
              <b>ID:</b> {address_id}
            </div>
            {/* <div className="totalAmount font12">
      <b>Total:</b> 
    </div> */}
            <div className="transaction_id font12">
              <b><textarea name="" value={address.replace(/_/g, " , ")} id="editAddressBox" cols="50" rows="5" readOnly>
              
                </textarea></b>
            </div>
            <div className="status font12" >
              <i className="fa fa-pencil-square-o"
                onClick={(event) => {
                  editAddress(event, address_id)
                }} aria-hidden="true"></i>
            </div>
            <div className="status font12" >
              <i className="fa fa-trash-o" onClick={(event) => {
                deleteAddress(event, address_id)
              }} aria-hidden="true"></i>

            </div>
            {/* <div className="status font12">Transist</div> */}
            <div className="status font12"> </div>
          </div>
          {/* <div className="orderMsg">
   yorder msg
  </div> */}
          <div></div>
        </div>
      </div>
    </>
  )

}



export const Addaddress=({changeviewForm,setAddressCallBack})=>{
  
const initialAddress={
  address:"",
  locality:"",
  // landmark:"",
  city:"",
  // state:"",
  pincode:"",
  altphoneno:"",
}
const user_id = useSelector((state) => state.user.user_id);
const addressReducer = (addressState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...addressState, [action.payload.name]: action.payload.value };
    default:
      return addressState;
  }
};
const [addressState, dispatch] = useReducer(addressReducer, initialAddress);
const handleInputChange = (event) => {
  return dispatch({
    type: "UPDATE_INPUT",
    payload: { name: event.target.name, value: event.target.value },
  });
};
const addNewAddress=(event)=>{
  const values=Object.values(addressState).join('_');
  // console.log(values);
  // console.log(user_id);
  const addressValue={
    'user_id':user_id,
    'address':values
  }
  // addressValue
httpRequest(addressValue,"createAddress.php" ).then(changeviewForm).then(getAddress);
}
useEffect(() => {
  getAddress().then((data) => {
    setAddressCallBack(data);
  });
},[]);
  return(
<>
{/* <div className="orderContainer">
        
        <div className="orderDetails">
          <div className="order_id font12">
            <b>
           <i className="fa fa-plus" aria-hidden="true" ></i> ADD A NEW ADDRESS
            </b>
          </div>
        </div>  */}
<div >
<div className="orderDetails">

<div className="flex-child">
  <input type="number" placeholder="Pincode" className="signInControl"
    value={addressState.pincode}
   onChange={handleInputChange}
   name="pincode"
  />
</div>
<div className="flex-child">
  <input type="text" placeholder="Locality" className="signInControl" 
  value={addressState.locality}
  onChange={handleInputChange}
  name="locality"/>
</div>


</div>
<div className="orderDetails">
<div className="address spacing address-txt-area">
  <textarea
    className="signInControl textArea txt-area"
    placeholder="Enter Your Address(Area and Street)"
    rows="4"
    value={addressState.address}
   onChange={handleInputChange}
   name="address"
  ></textarea>
</div>
</div>
<div className="orderDetails">
<div className="flex-child">
  <input type="text" placeholder="City/District/Town"
  value={addressState.city}
  onChange={handleInputChange}
  name="city"
  className="signInControl" />
</div>
<div className="flex-child">
<input type="number" placeholder="Alternate Phone No (Optional)" className="signInControl" 
  value={addressState.altphoneno}
  onChange={handleInputChange}
  name="altphoneno"
  />
</div>
</div>
{/* <div className="orderDetails">
<div className="flex-child">
  <input type="text" placeholder="Landmark(Optional)"
  value={addressState.landmark}
  onChange={handleInputChange}
  name="landmark"
  className="signInControl" />
</div>
<div className="flex-child">
  <input type="text" placeholder="Alternate Phone No (Optional)" className="signInControl" 
  value={addressState.altphoneno}
  onChange={handleInputChange}
  name="altphoneno"
  />
</div>
</div> */}
<div className="orderDetails">
<div className="flex-child">
<button  className="cancelBtn" onClick={changeviewForm} type="submit">Cancel</button>
</div>
<div className="flex-child">
<button className="saveBtn" type="submit" onClick={addNewAddress}>Save</button>
</div>
</div>
{/* <div className="orderDetails">
<button  className="cancelBtn" onClick={changeviewForm} type="submit">Cancel</button>
</div> */}

</div>
      {/* </div> */}
</>
  );
}