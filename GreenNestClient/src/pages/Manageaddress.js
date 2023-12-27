import { useEffect, useState,useReducer } from "react";
import { getAddress } from "./API";
import { httpRequest } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import "./Order.css";
// import { Link } from "react-router-dom";


export const Oneaddress = ({ addressObj, setAddressCallBack,handleAddress,radioState }) => {
  // let addressid=JSON.parse(addressObj.address_id)
  if(radioState ==undefined)
  radioState=false;
  const { address, address_id } = addressObj
  const deleteAddress = (event, address_id) => {
    httpRequest({ address_id }, "deleteAddress.php").then(() => {
      getAddress().then((data) => {
        setAddressCallBack(data);
      });
    });
  }
  const [addressId,handleAddressId]=useState(-1);
  const[EditAddressState,setEditAddress]=useState("");

  const editAddress = (event, address_id) => {
    httpRequest({ address_id }, "getOneAddress.php").then((data) => {
      var str=data[0].address
      str=str.split("_")
      setEditAddress(str)

      console.log(EditAddressState);
      handleAddressId(address_id)
      });

  }
  const handleRadioChange=(e)=>{
    const selectedValue=e.target.value;
    handleAddress(selectedValue);

  }
  // console.log(radioState)
  return (
    <>
      <div>
        <div className="orderContainer">
          <div className="orderDetails">
            <div className="order_id font12">
            {radioState ?
            <div>  
            <label htmlFor="addressRadio"></label>
            <input type="radio" name="addressRadio" value={address_id} onChange={handleRadioChange}  id="addressRadio" />
            {/* {address_id} */}
            
          </div>:" "
            }
                
                {/* </b>  */}

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
            {/* <div className="status font12"> </div> */}
          </div>
          {/* <div className="orderMsg">
   yorder msg
  </div> */}
          
        </div>
        <Editaddress EditAddressState={EditAddressState}  addressId={addressId}/>
      </div>
    </>
  )

}



export const Addaddress=({changeviewForm})=>{
  
const initialAddress={
  name:"",
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
    console.log(data);
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
  <input type="text" placeholder="Name" className="signInControl"
    value={addressState.name}
   onChange={handleInputChange}
   name="name"
  />
</div>
<div className="flex-child">
  <input type="text" placeholder="Locality" className="signInControl" 
  value={addressState.locality}
  onChange={handleInputChange}
  name="locality"/>
</div>
<div className="flex-child">
  <input type="number" placeholder="Pincode" className="signInControl"
    value={addressState.pincode}
   onChange={handleInputChange}
   name="pincode"
  />
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
export const Editaddress=({EditAddressState,addressId})=>{
  
  // const initialUpdateAddress={
  //   name:"",
  //   address:"",
  //   locality:"",
  //   // landmark:"",
  //   city:"",
  //   // state:"",
  //   pincode:"",
  //   altphoneno:"",
  // }
  const EditAddresObj=EditAddressState;

  const [initialUpdateAddress,setUpdateAddress]=useState({
   name:EditAddresObj[0],
    address:EditAddresObj[1],
    locality:EditAddresObj[2],
    city:EditAddresObj[3],
    pincode:EditAddresObj[4],
    altphoneno:EditAddresObj[5],
  });
  
  console.log(initialUpdateAddress);
  const handleInputChangeUpdate=(e)=>{
    var {name,value}=e.target;
    // var =e.target.value;
    const updatedObect={ ...initialUpdateAddress,[name] :value};
    setUpdateAddress(updatedObect)
  }
  // const user_id = useSelector((state) => state.user.user_id);
  // const updateReducer = (updateState, action) => {
  //   switch (action.type) {
  //     case "UPDATE_INPUT":
  //       return { ...updateState, [action.payload.name]: action.payload.value };
  //     default:
  //       return updateState;
  //   }
  // };
  // const [updateState, dispatch] = useReducer(updateReducer, initialUpdateAddress);
  // const handleInputChangeUpdate = (event) => {
  //   return dispatch({
  //     type: "UPDATE_INPUT",
  //     payload: { name: event.target.name, value: event.target.value },
  //   });
  // };
  const updateAddress=(event)=>{
    const values=Object.values(initialUpdateAddress).join('_');
    // console.log(values);
    // console.log(user_id);
    const addressValue={
      'address_id':addressId,
      'address':values
    }
    console.log(addressValue)
  // httpRequest(addressValue,"updateAddress.php" ).then(data=>console.log(data));
  }
  // useEffect(() => {
  //   getAddress().then((data) => {
  //     console.log(data);
  //   });
  // },[]);
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
    <input type="text" placeholder="Name" className="signInControl"
      value={initialUpdateAddress.name}
     onChange={handleInputChangeUpdate}
     name="name"
    />
  </div>
  <div className="flex-child">
    <input type="text" placeholder="Locality" className="signInControl" 
    value={initialUpdateAddress.locality}
    onChange={handleInputChangeUpdate}
    name="locality"/>
  </div>
  <div className="flex-child">
    <input type="number" placeholder="Pincode" className="signInControl"
      value={initialUpdateAddress.pincode}
     onChange={handleInputChangeUpdate}
     name="pincode"
    />
  </div>
  
  
  
  </div>
  <div className="orderDetails">
  <div className="address spacing address-txt-area">
    <textarea
      className="signInControl textArea txt-area"
      placeholder="Enter Your Address(Area and Street)"
      rows="4"
      value={initialUpdateAddress.address}
     onChange={handleInputChangeUpdate}
     name="address"
    ></textarea>
  </div>
  </div>
  <div className="orderDetails">
  <div className="flex-child">
    <input type="text" placeholder="City/District/Town"
    value={initialUpdateAddress.city}
    onChange={handleInputChangeUpdate}
    name="city"
    className="signInControl" />
  </div>
  <div className="flex-child">
  <input type="number" placeholder="Alternate Phone No (Optional)" className="signInControl" 
    value={initialUpdateAddress.altphoneno}
    onChange={handleInputChangeUpdate}
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
  <button  className="cancelBtn"  type="submit">Cancel</button>
  </div>
  <div className="flex-child">
  <button className="saveBtn" type="submit" onClick={updateAddress}>Save</button>
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
// export const Editaddress=({EditAddressState})=>{
//   const initialEditAddress={
//     name:EditAddressState[0],
//     address:"",
//     locality:"",
//     city:"",
//     pincode:"",
//     altphoneno:"",
//   }
//   const user_id = useSelector((state) => state.user.user_id);
// const editReducer = (editAddress, action) => {
//   switch (action.type) {
//     case "UPDATE_INPUT":
//       return { ...editAddress, [action.payload.name]: action.payload.value };
//     default:
//       return editAddress;
//   }
// };
// const [editAddress, dispatch] = useReducer(editReducer, initialEditAddress);
// const handleInputUpdate = (event) => {
//   return dispatch({
//     type: "UPDATE_INPUT",
//     payload: { name: event.target.name, value: event.target.value },
//   });
// };
// const updateAddress=(event)=>{
//   const values=Object.values(editAddress).join('_');
//   console.log(values);
//   // console.log(user_id);
//   const addressValue={
//     'user_id':user_id,
//     'address':values
//   }
//   // addressValue
// httpRequest(addressValue,"updateAddress.php" ).then(getAddress);
// }
//     return(
//   <>
//   <div >
//   <div className="orderDetails">
//   <div className="flex-child">
//     <input type="text" placeholder="Name" className="signInControl"
//       value={editAddress.name}
//      onChange={handleInputUpdate}
//      name="name"
//     />
//   </div>
//   <div className="flex-child">
//     <input type="text" placeholder="Locality" className="signInControl" 
//     value={EditAddressState[2]}
//     onChange={handleInputUpdate}
//     name="locality"/>
//   </div>
//   <div className="flex-child">
//     <input type="number" placeholder="Pincode" className="signInControl"
//       value={EditAddressState[4]}
//      onChange={handleInputUpdate}
//      name="pincode"
//     />
//   </div>
//   </div>
//   <div className="orderDetails">
//   <div className="address spacing address-txt-area">
//     <textarea
//       className="signInControl textArea txt-area"
//       placeholder="Enter Your Address(Area and Street)"
//       rows="4"
//       value={EditAddressState[1]}
//      onChange={handleInputUpdate}
//      name="address"
//     ></textarea>
//   </div>
//   </div>
//   <div className="orderDetails">
//   <div className="flex-child">
//     <input type="text" placeholder="City/District/Town"
//     value={EditAddressState[3]}
//     onChange={handleInputUpdate}
//     name="city"
//     className="signInControl" />
//   </div>
//   {/*  */}
//   <div className="flex-child">
//   <input type="number" placeholder="Alternate Phone No (Optional)" className="signInControl" 
//     value={typeof EditAddressState[5] === 'undefined'?"":EditAddressState[5]}
//     onChange={handleInputUpdate}
//     name="altphoneno"
//     />
//   </div>
//   </div>
//   <div className="orderDetails">
//   <div className="flex-child">
//   <button  className="cancelBtn"  type="submit">Cancel</button>
//   </div>
//   <div className="flex-child">
//   <button className="saveBtn" type="submit" onClick={updateAddress} >Update</button>
//   </div>
//   </div>
//   </div>
//         {/* </div> */}
//   </>
//     );
//   }

const Manageaddress = ({handleAddress,radioState}) => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddress().then((data) => {
      setAddress(data);
    });
  }, []);
  const setAddressCallBack = (data) => {
    // console.log(address);
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
          {viewForm?<Addaddress  changeviewForm={changeviewForm} /> : ""}
        </div> 
        </div>
      {address.map((oneAddress, index) => {
        return (
          <Oneaddress
            key={index}
            addressObj={oneAddress}
            setAddressCallBack={setAddressCallBack}
            handleAddress={handleAddress}
            radioState={radioState}
          />
        );
      }
      )}
    </>
  )
}
export default Manageaddress;