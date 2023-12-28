import { useEffect, useState, useRef } from "react";
import { getAddress } from "./API";
import { httpRequest } from "../API/api";
import { useSelector } from "react-redux";
import "./Order.css";

export const AddressCard = ({addressObj, setAddress,selectedAddressId, radioState }) => {
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
  const [addressId, AddressIdForUpdation] = useState(-1);
  const [PriviousAddressValue, setEditAddress] = useState("");

  const editAddress = (event, address_id) => {
    httpRequest({ address_id }, "getOneAddress.php").then((data) => {
      var str = data[0].address
      str = str.split("_")
      setEditAddress(str)
      AddressIdForUpdation(address_id)
    });
  }
  const handleRadioChange = (e) => {
    selectedAddressId(e.target.value);
  }
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
        <EditAddressDetails PriviousAddressValue={PriviousAddressValue} addressId={addressId} setAddress={setAddress} />
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
  const landmarkRef = useRef(null);
  const stateRef = useRef(null);
  const user_id = useSelector((state) => state.user.user_id);
  const addNewAddressHandler = (event) => {
    var addressValueObject = [nameRef.current.value, addressRef.current.value, locationRef.current.value, cityRef.current.value, pincodeRef.current.value, alterPhoneNoRef.current.value,landmarkRef.current.value,stateRef.current.value]
    addressValueObject = addressValueObject.join('_')
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
            <input type="text" placeholder="Name *" className="signInControl"
              ref={nameRef}
              name="name"
            />
          </div>
          <div className="flex-child">
            <input type="number" placeholder="Mobile Number *" className="signInControl"
              ref={alterPhoneNoRef}
              name="altphoneno"
            />
          </div>
        </div>
        <div className="orderDetails">
        <div className="flex-child">
            <input type="number" placeholder="Pincode *" className="signInControl"
              ref={pincodeRef}
              name="pincode"
            />
          </div>
        <div className="flex-child">
            <input type="text" placeholder="Locality / Area/ Street *" className="signInControl"
              ref={locationRef}
              name="locality" />
          </div>
        </div>
        <div className="orderDetails">
        <div className="flex-child">
            <input
              className="signInControl "
              placeholder="Building name / Falt number *"
              ref={addressRef}
              name="address"
           />
          </div>
          <div className="flex-child">
            <input type="text" placeholder="City/District *"
              ref={cityRef}
              name="city"
              className="signInControl" />
          </div>
        </div>
        {/* new  */}
        <div className="orderDetails">
        <div className="flex-child">
            <input
              className="signInControl "
              placeholder="Landmark *"
              ref={landmarkRef}
              name="address"
           />
          </div>
          <div className="flex-child">
            <input type="text" placeholder="State *"
              ref={stateRef}
              name="city"
              className="signInControl" />
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
export const EditAddressDetails = ({ PriviousAddressValue, addressId,setAddress }) => {
  const nameRef = useRef();
  const addressRef = useRef();
  const locationRef = useRef();
  const cityRef = useRef();
  const pincodeRef = useRef();
  const alterPhoneNoRef = useRef();
  const landmarkRef = useRef(null);
  const stateRef = useRef(null);
  useEffect(() => {
    nameRef.current.value = PriviousAddressValue[0] || ''
    addressRef.current.value = PriviousAddressValue[1] || ''
    locationRef.current.value = PriviousAddressValue[2] || ''
    cityRef.current.value = PriviousAddressValue[3] || ''
    pincodeRef.current.value = PriviousAddressValue[4] || ''
    alterPhoneNoRef.current.value = PriviousAddressValue[5] || ''
    landmarkRef.current.value=PriviousAddressValue[6] ||''
    stateRef.current.value=PriviousAddressValue[7] || ''
  }, [PriviousAddressValue]);

  const updateAddressHandler = (event) => {
    var addressValueObject = [nameRef.current.value, addressRef.current.value, locationRef.current.value, cityRef.current.value, pincodeRef.current.value, alterPhoneNoRef.current.value,landmarkRef.current.value,stateRef.current.value]
    addressValueObject = addressValueObject.join('_')
    console.log(addressValueObject)
    const addressValue = {
      'address_id': addressId,
      'address': addressValueObject
    }
    httpRequest(addressValue, "updateAddress.php").then(() => getAddress().then((data) => {
      setAddress(data)
    }));
  }
  return (
    <>
      <div >
      <div className="orderDetails">
          <div className="flex-child">
            <input type="text" placeholder="Name *" className="signInControl"
              ref={nameRef}
              name="name"
            />
          </div>
          <div className="flex-child">
            <input type="number" placeholder="Mobile Number *" className="signInControl"
              ref={alterPhoneNoRef}
              name="altphoneno"
            />
          </div>
        </div>
        <div className="orderDetails">
        <div className="flex-child">
            <input type="number" placeholder="Pincode *" className="signInControl"
              ref={pincodeRef}
              name="pincode"
            />
          </div>
        <div className="flex-child">
            <input type="text" placeholder="Locality / Area/ Street *" className="signInControl"
              ref={locationRef}
              name="locality" />
          </div>
        </div>
        <div className="orderDetails">
        <div className="flex-child">
            <input
              className="signInControl "
              placeholder="Building name / Falt number *"
              ref={addressRef}
              name="address"
           />
          </div>
          <div className="flex-child">
            <input type="text" placeholder="City/District *"
              ref={cityRef}
              name="city"
              className="signInControl" />
          </div>
        </div>
        {/* new  */}
        <div className="orderDetails">
        <div className="flex-child">
            <input
              className="signInControl "
              placeholder="Landmark *"
              ref={landmarkRef}
              name="address"
           />
          </div>
          <div className="flex-child">
            <input type="text" placeholder="State *"
              ref={stateRef}
              name="city"
              className="signInControl" />
          </div>
        </div>
        <div className="orderDetails">
          <div className="flex-child">
            <button className="cancelBtn" type="submit">Cancel</button>
          </div>
          <div className="flex-child">
            <button className="saveBtn" type="submit" onClick={updateAddressHandler}>Update</button>
          </div>
        </div>
       </div>
    </>
  );
}

const ManageAddress = ({ selectedAddressId, radioState }) => {
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
              selectedAddressId={selectedAddressId}
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