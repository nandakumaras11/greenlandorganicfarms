import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";
import { httpRequest } from "../../API/api";
import ButtonComponent from "../../component/ButtonComponent";
import ManageAddress from "../ManageAddress";
import "./OrderConfirmation.css";
export const OrderConfirmation = () => {
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
  const [address_id, changeAddressSelection] = useState(false);
  const [paymentMode, setPaymentMode] = useState("cod");
  const { isEmpty, items, cartTotal } = useCart();
  const user_id = useSelector((state) => state.user.user_id);
  // const user_id = loginCredentials.user_id;
  const navigate = useNavigate();
  let completeOrder = () => {
    if (!isEmpty) {
      const product = items.map(({ product_id, price, quantity }) => {
        return { product_id, price, quantity };
      });
      const data = {
        user_id: user_id,
        address_id: address_id,
        items: product,
        cartTotal: cartTotal,
        paymentMode: paymentMode,
        orderID: null
      };
      // httpRequest(data, "checkOut.php").then(data => console.log(data));
      httpRequest(data, "checkOut.php").then((respose) => {
        if (respose && respose.status && paymentMode == "cod") {
          //cod success
          navigate("/OrderPlaced");
        } else if (respose && respose.status && paymentMode == "Online") {
          //cod success
          data.orderID=respose.message;
          navigate("/PayOnline", { state: data });
        }
      });
    }
  };
  return (
    
    <div className="spacing categoryFilterContainer">
      {/* {console.log(address_id)} */}
      <div className="product-headding">Confirm your location</div>
      <div className="address spacing">
        <ManageAddress changeAddressSelection={changeAddressSelection} selectedAddressId={address_id} isAddressSelectionRequired={true} />

        {/* <Editaddress /> */}
      </div>
      <div className="product-headding spacing">Payment mode</div>
      <div className="payementModeDiv spacing">
        <div>
          {" "}
          <label htmlFor="CashOnDelivary"> Cash on delivery</label>{" "}
          <input
            name="paymentMode"
            id="CashOnDelivary"
            type="radio"
            value="cod"
            checked={paymentMode == "cod"}
            onChange={(event) => {
              setPaymentMode(event.target.value);
            }}
          />
        </div>
        <div className="spacing">
          <label htmlFor="Online"> Online Payment</label>{" "}
          <input
            name="paymentMode"
            type="radio"
            id="Online"
            checked={paymentMode == "Online"}
            value="Online"
            onChange={(event) => {
              setPaymentMode(event.target.value);
            }}
          />
        </div>
      </div>
      {/* {address_id} */}
      <ButtonComponent
        text="Confirm"
        classs={address_id==false ?"addbtn checkOutBtn disabled":"addbtn checkOutBtn"}
        orderConfirmation={true}
        onClick={completeOrder}
        disableValue={address_id==false ?true:false}
      />
    </div>
  );
};
