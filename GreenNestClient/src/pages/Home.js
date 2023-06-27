// import { useEffect } from "react"
// import axios from "axios";
import Card from "../component/Card";
import Carousel from "react-grid-carousel";
// import { CountriesSlider } from "../component/Card"
import Slider from "../component/Imageslider";
// import { Slidercard } from "../component/Slidercard"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUserLoginStatus } from "../Store1/Slices/UserSlice";
import { useEffect } from "react";
export default function Home() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productdetails.productList);
  const imagePath = useSelector((state) => state.banner.imagePath);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
    const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
    if (loginCredentials != null) 
    dispatch(setUserLoginStatus(loginCredentials));
  }, [])
  
  return (
    <>
      <Slider />
      <div className="categoryFilterContainer spacing">
        <div className="product-headding">What are you looking for?</div>
        <div className="categories spacing">
          <div className="categoryItem">
            <Link to={"/productList"} state={{ category: "plants" }}>
              <div className="categoryImage">
                <img src="./image/p1.jpg" />
              </div>
              <div className="categoryName">Plants</div>
            </Link>
          </div>

          <div className="categoryItem">
            <Link to={"/productList"} state={{ category: "seeds" }}>
              <div className="categoryImage">
                <img src="./image/p2.jpg" />
              </div>
              <div className="categoryName ">Seeds</div>
            </Link>
          </div>
          <div className="categoryItem">
            <Link to={"/productList"} state={{ category: "planters" }}>
              <div className="categoryImage">
                <img src="./image/p3.jpg" />
              </div>
              <div className="categoryName">Planters</div>
            </Link>
          </div>
          <div className="categoryItem">
            <Link to={"/productList"} state={{ category: "plantcares" }}>
              <div className="categoryImage">
                <img src="./image/p4.jpg" />
              </div>
              <div className="categoryName">Plant Care</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="product-container spacing">
        <div className="headding-container">
          <div className="label-img">
            <img srcSet="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/New-Plants_2x_d5110dfd-b698-4342-ba8d-9aa908711a32_small.png?v=1656414976" />
          </div>
          <div className="product-headding topheadding">New Arrivals</div>
          <div className="arrow-container"></div>
        </div>

        <div className="card-container">
          <Carousel
            containerStyle={{ width: "100%" }}
            loop={false}
            cols={2}
            rows={1}
            mobileBreakpoint={370}
            responsiveLayout={[
              { breakpoint: 761, cols: 2, rows: 1 },
              { breakpoint: 2080, cols: 5, rows: 1 },
            ]}
          >
            {products.map((item, index) => {
              var newArrivalArray = JSON.parse(item.product_tags);
              return newArrivalArray.filter((name) =>
                name.includes("NEW_ARRIVALS")
              ) == "NEW_ARRIVALS" ? (
                <Carousel.Item key={index}>
                  <Card
                    image={imagePath + item.product_img}
                    cardClass="single-card"
                    productname={item.product_name}
                    oldprice={item.old_price}
                    newprice={item.selling_price}
                    description={item.description}
                    productInfo={item}
                    viewProduct={true}
                  />
                </Carousel.Item>
              ) : null;
            })}
          </Carousel>
        </div>

        <div className="headding-container spacing">
          <div className="label-img">
            <img
              src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Bestseller-1_2x_9a883cf1-58ba-4c74-badf-f02924575b68_small.png?v=1656416175"
              alt="label-img"
            />
          </div>
          <div className="product-headding topheadding">Trending Products</div>
          <div className="arrow-container"></div>
        </div>

        <div className="card-container">
          <Carousel
            containerStyle={{ width: "100%" }}
            loop={false}
            cols={2}
            rows={1}
            mobileBreakpoint={375}
            responsiveLayout={[
              { breakpoint: 761, cols: 2, rows: 1 },
              { breakpoint: 2080, cols: 5, rows: 1 },
            ]}
          >
            {products.map((item, index) => {
              var newArrivalArray = JSON.parse(item.product_tags);
              // console.log(newArrivalArray);
              return newArrivalArray.filter((name) =>
                name.includes("BEST_SELLER")
              ) == "BEST_SELLER" ? (
                <Carousel.Item key={index}>
                  <Card
                    image={imagePath + item.product_img}
                    cardClass="single-card"
                    productname={item.product_name}
                    oldprice={item.old_price}
                    newprice={item.selling_price}
                    description={item.description}
                    productInfo={item}
                    viewProduct={true}
                  />
                </Carousel.Item>
              ) : null;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
