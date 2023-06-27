import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";
import { getAddress } from "../API";
import "./OrderPlaced.css";
import { useDispatch } from "react-redux";
import { setUserLoginStatus } from "../../Store1/Slices/UserSlice";
export const OrderPlaced = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getAddress().then((respose) => {
      console.log(respose);
      dispatch(setUserLoginStatus(...respose));
      localStorage.setItem(
        "loginCredentials",
        JSON.stringify(...respose)
      );
    })
  }, [])

  const { emptyCart } = useCart();

  setTimeout(() => {
    emptyCart();
    navigate("/");
  }, 4000);
  return (
    <div className="orderPlacedContainer bgGreen">
      <div className="orderMSG">
        Your order has been placed
        <div className="orderIcon">
          <i className="fa fa-check-circle" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
