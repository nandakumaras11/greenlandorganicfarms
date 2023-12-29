import { useEffect, useState, useRef } from "react";
import { getAddress } from "./API";
import { httpRequest } from "../API/api";
import { useSelector } from "react-redux";
import "./Order.css";

export const AddressCard = ({ address: addressObj, setAddress, changeAddressSelection, isAddressSelectionRequired = false, selectedAddressId, toggleAddressForm }) => {
  const { address, address_id } = addressObj;
  const [PriviousAddressValue, setEditAddress] = useState("");
  const [addressId, AddressIdForUpdation] = useState(-1);
  const [isEditFormVisible, setIsEditFormVisible] = useState(-1)
  const deleteAddress = (event, address_id) => {
    httpRequest({ address_id }, "deleteAddress.php").then(() => {
      getAddress().then((data) => {
        setAddress(data);
      });
    });
  }
  const editAddress = (event, address_id) => {
    changeAddressSelection(address_id);
    setEditAddress(address.split("_"));
    setIsEditFormVisible(address_id);
    AddressIdForUpdation(address_id);
    toggleAddressForm(false);
  }

  return (
    <>
      {console.log(selectedAddressId)}
      <div className={`addressContainer pointer ${selectedAddressId == address_id && 'selectedAddress'} `} onClick={() => { changeAddressSelection(address_id) }}>
        <div className="addressDetails">
          <div className="font12">
            {address.replaceAll("_", ", ")}
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
      {selectedAddressId == isEditFormVisible && <EditAddressDetails PriviousAddressValue={PriviousAddressValue} addressId={addressId} setAddress={setAddress} setIsEditFormVisible={setIsEditFormVisible} />}
    </>
  )

}


function TextBox({ nameRef, name, placeholder }) {
  return (<div class="form__group field">
    <input type="input" class="form__field" placeholder={placeholder} ref={nameRef} name={name} id={name} required />
    <label for={name} class="form__label">{name}</label>
  </div>);
}


export const CreateNewAddress = ({ toggleAddressForm, setAddress }) => {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const locationRef = useRef(null);
  const landmarkRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const pincodeRef = useRef(null);
  const alterPhoneNoRef = useRef(null);
  const user_id = useSelector((state) => state.user.user_id);
  const addNewAddressHandler = (event) => {
    var addressValueObject = [nameRef.current.value, addressRef.current.value, locationRef.current.value, cityRef.current.value, pincodeRef.current.value, alterPhoneNoRef.current.value, landmarkRef.current.value, stateRef.current.value]
    addressValueObject = addressValueObject.join('_')
    const addressValue = {
      'user_id': user_id,
      'address': addressValueObject
    }
    httpRequest(addressValue, "createAddress.php").then(() => toggleAddressForm(false)).then(() => getAddress().then((data) => {
      setAddress(data)
    }));
  }
  return (
    <>
      <div >
        <div className="addressDetails">
          <div className="flex-child">
            <TextBox nameRef={nameRef} placeholder="Name *" name="Name" />
          </div>
          <div className="flex-child">
            <TextBox nameRef={alterPhoneNoRef} placeholder="Mobile Number *" name="Mobile" />
          </div>
        </div>
        <div className="addressDetails">
          <div className="flex-child">
            <TextBox nameRef={pincodeRef} placeholder="Pincode *" name="Pincode" />
          </div>
          <div className="flex-child">
            <TextBox nameRef={locationRef} placeholder="Locality / Area/ Street *" name="Locality / Area/ Street *" />
          </div>
        </div>
        <div className="addressDetails">
          <div className="flex-child">
            <TextBox nameRef={addressRef} placeholder="Building name / Flat number *" name="Building name / Flat number *" />
          </div>
          <div className="flex-child">
            <TextBox nameRef={cityRef} placeholder="City/District *" name="City/District *" />
          </div>
        </div>
        {/* new  */}
        <div className="addressDetails">
          <div className="flex-child">
            <TextBox nameRef={landmarkRef} placeholder="Landmark *" name="Landmark *" />
          </div>
          <div className="flex-child">
            <TextBox nameRef={stateRef} placeholder="State *" name="State *" />
          </div>
        </div>
        <div className="addressDetails">
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
export const EditAddressDetails = ({ PriviousAddressValue, addressId, setAddress, setIsEditFormVisible }) => {
  const nameRef = useRef();
  const addressRef = useRef();
  const locationRef = useRef();
  const landmarkRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const pincodeRef = useRef();
  const alterPhoneNoRef = useRef();
  useEffect(() => {
    nameRef.current.value = PriviousAddressValue[0] || ''
    addressRef.current.value = PriviousAddressValue[1] || ''
    locationRef.current.value = PriviousAddressValue[2] || ''
    cityRef.current.value = PriviousAddressValue[3] || ''
    pincodeRef.current.value = PriviousAddressValue[4] || ''
    alterPhoneNoRef.current.value = PriviousAddressValue[5] || ''
    landmarkRef.current.value = PriviousAddressValue[6] || ''
    stateRef.current.value = PriviousAddressValue[7] || ''
  }, [PriviousAddressValue]);

  const updateAddressHandler = (event) => {
    var addressValueObject = [nameRef.current.value, addressRef.current.value, locationRef.current.value, cityRef.current.value, pincodeRef.current.value, alterPhoneNoRef.current.value, landmarkRef.current.value, stateRef.current.value]
    addressValueObject = addressValueObject.join('_')
    const addressValue = {
      'address_id': addressId,
      'address': addressValueObject
    }
    httpRequest(addressValue, "updateAddress.php").then(() => getAddress().then((data) => {
      setAddress(data);
      setIsEditFormVisible(false);
    }));
  }
  return (
    <>
      <div>
        <div className="addressDetails">
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
        <div className="addressDetails">
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
        <div className="addressDetails">
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
        <div className="addressDetails">
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
        <div className="addressDetails">
          <div className="flex-child">
            <button className="cancelBtn" type="submit" onClick={() => { setIsEditFormVisible(false) }}>Cancel</button>
          </div>
          <div className="flex-child">
            <button className="saveBtn" type="submit" onClick={updateAddressHandler}>Update</button>
          </div>
        </div>
      </div>
    </>
  );
}

const ManageAddress = ({ changeAddressSelection, isAddressSelectionRequired, selectedAddressId }) => {
  const [addresses, setAddress] = useState([]);
  const [showAddressForm, toggleAddressForm] = useState(false);
  useEffect(() => {
    getAddress().then((data) => {
      setAddress(data);
    });
  }, []);
  return (
    <div className="addresses spacing">
      <div className="addressContainer">
        <div className={showAddressForm ? "cancel" : "addressDetails"}>
          <div className="font12 pointer addressDetails" onClick={() => toggleAddressForm(!showAddressForm)}>
            {showAddressForm ? ("") : (<> <i className="fa fa-plus" aria-hidden="true" /> <span>ADD NEW ADDRESS</span></>)}
          </div>
          {showAddressForm && <CreateNewAddress toggleAddressForm={toggleAddressForm} setAddress={setAddress} />}
        </div>
      </div>
      {addresses.map((address, index) => {
        return (

          <AddressCard
            key={index}
            address={address}
            setAddress={setAddress}
            changeAddressSelection={changeAddressSelection}
            isAddressSelectionRequired={isAddressSelectionRequired}
            selectedAddressId={selectedAddressId}
            toggleAddressForm={toggleAddressForm}
          />
        );
      }
      )}

      {/* 
      {selectedAddressId == isEditFormVisible && <EditAddressDetails PriviousAddressValue={PriviousAddressValue} addressId={addressId} setAddress={setAddress} setIsEditFormVisible={setIsEditFormVisible} />} */}
    </div>
  )
}
export default ManageAddress;