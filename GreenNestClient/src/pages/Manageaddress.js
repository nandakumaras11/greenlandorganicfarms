import { useEffect, useState } from "react";
import { getAddress } from "./API";
import { httpRequest } from "../API/api";
import "./Order.css";
import { Link } from "react-router-dom";

const Manageaddress = () => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddress().then((data) => {
      setAddress(data);
    });
  }, []);
  const setAddressCallBack = (data) => {
    setAddress(data);
  };
  const [viewForm,setForm]=useState(false)
  // console.log(viewForm)
  // console.log(address)
  return (
    <>
      {/* <h1>Manageaddress page</h1> */}
      <div className="orderContainer">
        
        <div className={viewForm?"cancel":"orderDetails"}>
          <div className="order_id font12" onClick={()=>setForm(!viewForm)}>
            <b>
          
           {viewForm?( <span> Cancel</span>  ):(<span> <i className="fa fa-plus" aria-hidden="true" ></i>ADD A NEW ADDRESS</span> )}

            </b>
          </div>
          {viewForm?<Addaddress />: ""}
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
              <b>{address}</b>
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



export const Addaddress=()=>{

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
  <input type="text" placeholder="Pincode" className="signInControl" />
</div>
<div className="flex-child">
  <input type="text" placeholder="Locality" className="signInControl" />
</div>


</div>
<div className="orderDetails">
<div className="address spacing address-txt-area">
  <textarea
    className="signInControl textArea txt-area"
    placeholder="Enter Your Address(Area and Street)"
    rows="4"
    name="address"
  ></textarea>
</div>
</div>
<div className="orderDetails">
<div className="flex-child">
  <input type="text" placeholder="City/District/Town" className="signInControl" />
</div>
<div className="flex-child">
  <input type="text" placeholder="State" className="signInControl" />
</div>
</div>
<div className="orderDetails">
<div className="flex-child">
  <input type="text" placeholder="Landmark(Optional)" className="signInControl" />
</div>
<div className="flex-child">
  <input type="text" placeholder="Alternate Phone No (Optional)" className="signInControl" />
</div>
</div>
<div className="orderDetails">
<button className="saveBtn" type="submit">Save</button>
</div>

</div>
      {/* </div> */}
</>
  );
}