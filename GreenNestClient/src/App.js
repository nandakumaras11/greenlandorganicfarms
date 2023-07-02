import "./asset/css/style.css";
import React from "react";
import Navbar from "./component/Navbar.js";
import { useEffect } from "react";
import axios from "axios";
import { AllRoutes } from "./AllRoutes";
import { useDispatch } from "react-redux";
import { fetchandstore } from "./Store1/Slices/productSlice";
import { httpRequest } from "./API/api";
import Shopingcart from "./pages/Shopingcart";
window.$apiBaseUrl = "https://greenlandorganicfarms.com/api/User/";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    httpRequest({}, "getProductList.php")
      .then((data) => {
        dispatch(fetchandstore(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* <Helmet
        titleAttributes={{ itemprop: "name" }}
        htmlAttributes={{
          itemscope: "",
          itemtype: "http://schema.org/WebPage",
        }}
      >
        <link rel="manifest" href="/manifest.webmanifest.json" />
        <meta name="theme-color" content="#E53012">
      </Helmet> */}
      <div className="container">
        <Navbar />
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
