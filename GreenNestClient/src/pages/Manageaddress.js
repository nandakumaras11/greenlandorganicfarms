import { useEffect,useState } from "react";
import { getAddress } from "./API";
import { httpRequest } from "../API/api";
import "./Order.css";

const Manageaddress=()=>{
    const [address, setAddress] = useState([]);
    useEffect(() => {
        getAddress().then((data) => {
            setAddress(data);
      });
    }, []);
    const setAddressCallBack = (data) => {
        setAddress(data);
      };
    console.log(address)
    return (
        <>
        <h1>Manageaddress page</h1>
       {address.map((oneAddress,index)=>{
        return(
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

export const Oneaddress=({addressObj,setAddressCallBack})=>{
  // let addressid=JSON.parse(addressObj.address_id)
  const {address,address_id  }=addressObj
  const deleteAddress=(event,address_id)=>{
    httpRequest({ address_id }, "deleteAddress.php").then(() => {
      getAddress().then((data) => {
        setAddressCallBack(data);
      });
    });
  }
  const editAddress=(event,address_id)=>{

  }
  return(
    <>
    <div>
<div className="orderContainer">
  <div className="orderDetails">
    <div className="order_id font12">
      <b>ID:</b> {address_id}
    </div>
    <div className="totalAmount font12">
      <b>Total:</b> 
    </div>
    <div className="transaction_id font12">
      <b>{address}</b> 
    </div>
    <div className="status font12" >
    <i className="fa fa-pencil-square-o"
    onClick={(event)=>{
      editAddress(event,address_id)
    }} aria-hidden="true"></i>
    </div>
    <div className="status font12" >
    <i className="fa fa-trash-o" onClick={(event)=>{
      deleteAddress(event,address_id)
    }}  aria-hidden="true"></i>
    
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