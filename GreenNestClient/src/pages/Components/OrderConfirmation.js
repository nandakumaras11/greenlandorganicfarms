import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";
import { httpRequest } from "../../API/api";
import ButtonComponent from "../../component/ButtonComponent";
import "./OrderConfirmation.css";
export const OrderConfirmation = () => {
  const { isEmpty, items, cartTotal } = useCart();
  const savedAddress = useSelector((state) => state.user.address);
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
  const user_id = loginCredentials.user_id;
  const [address, setAddress] = useState(savedAddress);
  const [paymentMode, setPaymentMode] = useState("cod");
  const navigate = useNavigate();
  let completeOrder = () => {
    if (!isEmpty) {
      const product = items.map(({ product_id, price, quantity }) => {
        return { product_id, price, quantity };
      });
      const data = {
        user_id: user_id,
        address: address,
        items: product,
        cartTotal: cartTotal,
        paymentMode: paymentMode,
        orderID:null
      };
      console.log(data);
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
      <div className="product-headding">Confirm your location</div>
      <div className="address spacing">
        <textarea
          className="signInControl textArea"
          placeholder="Enter Your Address"
          rows="4"
          name="address"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        ></textarea>
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
      <ButtonComponent
        text="Confirm"
        classs="addbtn checkOutBtn"
        orderConfirmation={true}
        onClick={completeOrder}
      />
    </div>
  );
};
