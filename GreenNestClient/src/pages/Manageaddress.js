import { useEffect, useState, useReducer, useRef } from "react";
import { getAddress } from "./API";
import { httpRequest } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import "./Order.css";
// import { Link } from "react-router-dom";


export const AddressCard = ({ key, addressObj, setAddress, handleAddress, radioState }) => {
  // let addressid=JSON.parse(addressObj.address_id)
  if (radioState == undefined)
    radioState = false;
  const { address, address_id } = addressObj
  const deleteAddress = (event, address_id) => {
    httpRequest({ address_id }, "deleteAddress.php").then(() => {
      getAddress().then((data) => {
        setAddress(data);
      });
    });
  }
  const [formVisibility, setFormVisibility] = useState()
  const [addressId, handleAddressId] = useState(-1);
  const [PriviousAddressValue, setEditAddress] = useState("");

  const editAddress = (event, address_id) => {
    httpRequest({ address_id }, "getOneAddress.php").then((data) => {
      var str = data[0].address
      str = str.split("_")
      setEditAddress(str)
      handleAddressId(address_id)
    });

  }
  const handleRadioChange = (e) => {
    const selectedValue = e.target.value;
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
                  <input type="radio" name="addressRadio" value={address_id} onChange={handleRadioChange} id="addressRadio" />
                  {/* {address_id} */}

                </div> : " "
              }
            </div>
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
          </div>
        </div>
        {/* <EditAddressDetails key={key} PriviousAddressValue={PriviousAddressValue} addressId={addressId} /> */}
      </div>
    </>
  )

}

export const CreateNewAddress = ({ toggleAddressForm, setAddress }) => {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const locationRef = useRef(null);
  const cityRef = useRef(null);
  const pincodeRef = useRef(null);
  const alterPhoneNoRef = useRef(null);
  const user_id = useSelector((state) => state.user.user_id);
  const addNewAddressHandler = (event) => {
    var addressValueObject = [nameRef.current.value, addressRef.current.value, locationRef.current.value, cityRef.current.value, pincodeRef.current.value, alterPhoneNoRef.current.value]
    addressValueObject = addressValueObject.join('_')
    // console.log(addressValueObject)
    const addressValue = {
      'user_id': user_id,
      'address': addressValueObject
    }
    httpRequest(addressValue, "createAddress.php").then(() => toggleAddressForm(false)).then(() => getAddress().then((data) => {
      setAddress(data)
    }));
  }
  useEffect(() => {
    getAddress().then((data) => {
    });
  }, []);
  return (
    <>
      <div >
        <div className="orderDetails">
          <div className="flex-child">
            <input type="text" placeholder="Name" className="signInControl"
              ref={nameRef}
              name="name"
            />
          </div>
          <div className="flex-child">
            <input type="text" placeholder="Locality" className="signInControl"
              ref={locationRef}
              name="locality" />
          </div>
          <div className="flex-child">
            <input type="number" placeholder="Pincode" className="signInControl"
              ref={pincodeRef}
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
              ref={addressRef}
              name="address"
            ></textarea>
          </div>
        </div>
        <div className="orderDetails">
          <div className="flex-child">
            <input type="text" placeholder="City/District/Town"
              ref={cityRef}
              name="city"
              className="signInControl" />
          </div>
          <div className="flex-child">
            <input type="number" placeholder="Alternate Phone No (Optional)" className="signInControl"
              ref={alterPhoneNoRef}
              name="altphoneno"
            />
          </div>
        </div>
        <div className="orderDetails">
          <div className="flex-child">
            <button className="cancelBtn" onClick={() => toggleAddressForm(false)} type="submit">Cancel</button>
          </div>
          <div className="flex-child">
            <button className="saveBtn" type="submit" onClick={addNewAddressHandler}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
export const EditAddressDetails = ({ PriviousAddressValue, addressId }) => {
  const nameRef = useRef();
  const addressRef = useRef();
  const locationRef = useRef();
  const cityRef = useRef();
  const pincodeRef = useRef();
  const alterPhoneNoRef = useRef();

  useEffect(() => {
    nameRef.current.value = PriviousAddressValue[0] || ''
    addressRef.current.value = PriviousAddressValue[1] || ''
    locationRef.current.value = PriviousAddressValue[2] || ''
    cityRef.current.value = PriviousAddressValue[3] || ''
    pincodeRef.current.value = PriviousAddressValue[4] || ''
    alterPhoneNoRef.current.value = PriviousAddressValue[5] || ''
  }, [PriviousAddressValue]);

  const updateAddressHandler = (event) => {
    var addressValueObject = [nameRef.current.value, addressRef.current.value, locationRef.current.value, cityRef.current.value, pincodeRef.current.value, alterPhoneNoRef.current.value]
    addressValueObject = addressValueObject.join('_')
    console.log(addressValueObject)
    const addressValue = {
      'address_id': addressId,
      'address': addressValueObject
    }
    console.log(addressValue)
    httpRequest(addressValue, "updateAddress.php").then(data => console.log(data));
  }

  return (
    <>
      <div >
        <div className="orderDetails">
          <div className="flex-child">
            <input type="text" placeholder="Name" className="signInControl"
              ref={nameRef}
              //  value={nameRef.current.value}
              name="name"
            />
          </div>
          <div className="flex-child">
            <input type="text" placeholder="Locality" className="signInControl"
              ref={locationRef}
              //  value={locationRef.current.value}
              name="locality" />
          </div>
          <div className="flex-child">
            <input type="number" placeholder="Pincode" className="signInControl"
              ref={pincodeRef}
              //  value={pincodeRef.current.value}
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
              ref={addressRef}
              // value={addressRef.current.value}
              name="address"
            ></textarea>
          </div>
        </div>
        <div className="orderDetails">
          <div className="flex-child">
            <input type="text" placeholder="City/District/Town"
              ref={cityRef}
              // value={cityRef.current.value}
              name="city"
              className="signInControl" />
          </div>
          <div className="flex-child">
            <input type="number" placeholder="Alternate Phone No (Optional)" className="signInControl"
              ref={alterPhoneNoRef}
              // value={alterPhoneNoRef.current.value}
              name="altphoneno"
            />
          </div>
        </div>
        <div className="orderDetails">
          <div className="flex-child">
            <button className="cancelBtn" type="submit">Cancel</button>
          </div>
          <div className="flex-child">
            <button className="saveBtn" type="submit" onClick={updateAddressHandler}>Save</button>
          </div>
        </div>
       </div>
    </>
  );
}
const ManageAddress = ({ handleAddress, radioState }) => {
  const [addresses, setAddress] = useState([]);
  const [showAddressForm, toggleAddressForm] = useState(false);
  useEffect(() => {
    getAddress().then((data) => {
      setAddress(data);
    });
  }, []);
  return (
    <>
      <div className="orderContainer">
        <div className={showAddressForm ? "cancel" : "orderDetails"}>
          <div className="order_id font12" onClick={() => toggleAddressForm(!showAddressForm)}>
            <b>
              {showAddressForm ? ("") : (<span className="pointer"> <i className="fa fa-plus" aria-hidden="true" ></i>ADD A NEW ADDRESS</span>)}
            </b>
          </div>
          {showAddressForm ? <CreateNewAddress toggleAddressForm={toggleAddressForm} setAddress={setAddress} /> : ""}
        </div>
      </div>
      {addresses.map((oneAddress, index) => {
        return (
          <>
            <AddressCard
              key={index}
              addressObj={oneAddress}
              setAddress={setAddress}
              handleAddress={handleAddress}
              radioState={radioState}
            />
          </>
        );
      }
      )}
    </>
  )
}
export default ManageAddress;