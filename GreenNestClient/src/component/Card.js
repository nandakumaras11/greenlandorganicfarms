import "../asset/css/card.css";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
export default function Card({
  image,
  productname,
  newprice,
  oldprice,
  description,
  cardClass,
  product_id,
  productInfo,
  viewProduct,
}) {
  // console.log(window.$apiBaseUrl);
  return (
    // Make a request for a user with a given ID
    <>
      <div className={cardClass}>
        <Link
          to={"/productdetails"}
          state={{ productInfo: productInfo }}
          id={product_id}
        >
          <div className="product-img">
            <img className="productImage" src={image} alt="productImage" />
          </div>
          <div className="product-desc-container">
            <div className="product-name"> {productname}</div>
            <div className="price">
              <div className="priceContainer">
                <div className="oldPrice">
                  <s>₹{oldprice}</s>
                </div>
                <div className="new-price">
                  <b>₹{newprice}</b>
                </div>
              </div>
            </div>
            <ButtonComponent
              text={viewProduct ? "VIEW PRODUCT" : "ADD TO CART"}
              classs="addbtn"
              viewProduct
              product={productInfo}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
