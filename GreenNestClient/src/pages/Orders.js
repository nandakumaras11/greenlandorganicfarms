import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { httpRequest } from "../API/api";
import ButtonComponent from "../component/ButtonComponent";
import Quantitybtn from "../component/Quantitybtn";
import { getOrder } from "./API";
import "./Order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrder().then((data) => {
      setOrders(data);
    });
  }, []);
  const setOrdersCallBack = (data) => {
    setOrders(data);
  };
  return (
    <>
      {orders.map((order, index) => {
        return (
          <OrderItem
            key={index}
            order={order}
            setOrdersCallBack={setOrdersCallBack}
          />
        );
      })}
    </>
  );
};
export default Orders;

export const OrderItem = ({ order, setOrdersCallBack }) => {
  let orderedProducts = JSON.parse(order.product_id);
  const { order_id, totalAmount, transaction_id, orderMessage, status } = order;
  const [showProduct, toggleProduct] = useState(false);
  const cancelOrder = (event, orderID) => {
    httpRequest({ orderID }, "cancelOrder.php").then(() => {
      getOrder().then((data) => {
        setOrdersCallBack(data);
      });
    });
  };
  let orderStatusText = "";
  if (status == "pending") orderStatusText = "Unable to complete this order.";
  else if (status == "TXN_SUCCESS") orderStatusText = "Order successfully placed";
  else orderStatusText = orderMessage;
  return (
    <div>
      <div className="orderContainer">
        <div className="orderDetails">
          <div className="order_id font12">
            <b>ID:</b> #{order_id}
          </div>
          <div className="totalAmount font12">
            <b>Total:</b> {totalAmount}{" "}
          </div>
          <div className="transaction_id font12">
            <b>Payment:</b> {transaction_id == 0 ? " COD" : " ONLINE"}
          </div>
          {/* <div className="status font12">Transist</div> */}
          <div
            className="status font12"
            onClick={() => toggleProduct(!showProduct)}
          >
            <i
              className={!showProduct ? "fa fa-plus" : "fa fa-minus"}
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="orderMsg">
          {orderStatusText}
        </div>
        <div></div>{" "}
      </div>
      <div
        className={
          showProduct ? "products displayBlock" : "products displayNone"
        }
      >
        {orderedProducts.map((orderedProduct, index) => {
          return <Product key={index} orderedProduct={orderedProduct} />;
        })}
        {status == "TXN_SUCCESS" || status == "TRANSIST" ? (
          <div
            className="cancelOrder"
            onClick={(event) => {
              cancelOrder(event, order_id);
            }}
          >
            {" "}
            Cancel Order
            {/* Cancel Order <i className="fa fa-trash-o" aria-hidden="true"></i> */}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export const Product = ({ orderedProduct }) => {
  const productList = useSelector((state) => state.productdetails.productList);
  const imagePath = useSelector((state) => state.banner.imagePath);

  let getProductDetailsByProductID = (product_id) => {
    let productDetails = productList.filter((item) => {
      return item.product_id == product_id;
    });
    return productDetails && productDetails[0];
  };
  const { product_id, quantity, price } = orderedProduct;
  const { product_name, product_img } =
    getProductDetailsByProductID(product_id);
  // console.log(productDetails)
  return (
    <>
      <div className="productContainer">
        <div className="productImageSection">
          <div className="image">
            <img src={imagePath + product_img} width="50" />
          </div>
          <div className="name">{product_name}</div>
        </div>
        <div className="orderPrice">{price}</div>
        <div className="quantity">{quantity}</div>
        <div className="total">{parseInt(quantity) * parseInt(price)}</div>
      </div>
    </>
  );
};
