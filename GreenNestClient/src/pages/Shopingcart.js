import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";
import ButtonComponent from "../component/ButtonComponent";
import Quantitybtn from "../component/Quantitybtn";

const Shopingcart = () => {
  const { isEmpty, items, cartTotal } = useCart();
  const navigate = useNavigate();
  const imagePath = useSelector((state) => state.banner.imagePath);
  const userId = useSelector((state) => state.user.user_id);
  const onCheckOut = () => {
    userId == null ? navigate("/signIn") : navigate("/OrderConfirmation");
  };
  return (
    <>
      {isEmpty ? (
        <div className="emptyCartContainer product-headding">
          Your cart is empty
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-body">
            {items.map((product, key) => {
              return (
                <div className="body-tr" key={key}>
                  <div className="img-cart cart-th">
                    <img
                      className="product-cart-img"
                      src={imagePath + product.product_img}
                      alt="product-img"
                    />
                  </div>
                  <div className="product-det-cart">
                    <div className="cart-th">{product.product_name}</div>
                    <div className="cart-th main-txt">{product.price}</div>
                    <div className="cart-th">
                      <Quantitybtn item={product} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ButtonComponent
            text={"Checkout- ₹" + cartTotal}
            classs="addbtn checkOutBtn"
            checkOut={true}
            onClick={onCheckOut}
          />
        </div>
      )}
    </>
  );
};
export default Shopingcart;
