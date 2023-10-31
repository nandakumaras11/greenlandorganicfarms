import "../asset/css/productdetails.css";
import { Link, useLocation } from "react-router-dom";
import Quantitybtn from "../component/Quantitybtn";
import ButtonComponent from "../component/ButtonComponent";
import { useSelector } from "react-redux";
import { WhatAreYouLookingFor } from "./Home";
export default function Productdetalils() {
  const imagePath = useSelector((state) => state.banner.imagePath);
  const { state } = useLocation();
  // console.log(state);
  const productInfo = state.productInfo;
  return (
    <>
      <div className="productdetail-container">
        <div className="productdetails-left-container">
          <div className="big-product-img">
            <img src={imagePath + productInfo.product_img} alt="big-img" />
          </div>
        </div>
        <div className="productdetails-right-container spacing">
          <h2 className="product-names">{productInfo.product_name}</h2>
          <div className="price">
            <div className="priceContainer">
              <div className="oldPrice">
                <s>₹{productInfo.old_price}</s>
              </div>
              <div className="new-price">
                <b>₹{productInfo.selling_price}</b>
              </div>
            </div>
            <div className="saveUpto">
              Shop now and save {productInfo.old_price - productInfo.selling_price} ₹ ⭐
            </div>
          </div>

          <div className="price-btn-container">
            {/* <div className="button-flex spacing">
              <Quantitybtn item={productInfo} />
            </div> */}
            <Link to="/cart">
              <ButtonComponent
                text="ADD TO CART"
                classs="addbtn addtocart"
                product={productInfo}
              />
            </Link>
          </div>
          <div className="product-small-desc spacing">
            <div className="aboutProductHeading title">About Product</div>
            <div className="aboutProductDescription spacing">
              {productInfo.description}
            </div>
          </div>
          <div className="productFeatures">
            <div className="shipping">
              <img src="/shipping.png" width="100" alt="" className="src" />
              <div className="description">Fast Shipping</div>
            </div>
            <div className="customer">
              <img src="/customer.png" width="80" alt="" className="src" />
              <div className="description">10K+ Happy Customer</div>
            </div>
            <div className="shipping">
              <img src="/handpicked.png" width="100" alt="" className="src" />
              <div className="description">Hand Picked Items</div>
            </div>
          </div>

        </div>
      </div>
      <div className="hr"></div>
      {/* <div className="hr"></div> */}
      <WhatAreYouLookingFor />
    </>
  );
}
