import "./asset/css/style.css";
import React from "react";
// import Navbar from "./component/Navbar.js";
// import Card from "./component/Card.js"
// import Searchbar from "./component/Searchbar.js"
// import Footer from "./component/Footer"
import Productdetalils from "./pages/Productdetalils";
import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import Home from "./pages/Home";
import Shopingcart from "./pages/Shopingcart";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Contactus from "./pages/Contactus";
// import { Modal } from 'react-responsive-modal';
// import 'react-responsive-modal/styles.css';
import { Plants } from "./pages/Plants";
import { Seeds } from "./pages/Seeds";
import { Planters } from "./pages/Planters";
import { PlantCare } from "./pages/PlantCare";
import { ProductList } from "./pages/ProductList/ProductList";
import { SignIn } from "./pages/SignIn/SignIn";
import Orders from "./pages/Orders";
import { Address, OrderConfirmation } from "./pages/Components/OrderConfirmation";
import { PayOnline } from "./pages/OnlinePayment/PayOnline";
import { OrderPlaced } from "./pages/OrderPlaced/OrderPlaced";
import AboutUS from "./pages/AboutUS";
import PrivacyPolicy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RefundPolicy from "./component/RefundPolicy";
// import
const routeInfo = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/About",
    component: <AboutUS />,
  },
  {
    path: "/OrderConfirmation",
    component: <OrderConfirmation />,
  },
  {
    path: "/plants",
    component: <Plants />,
  },
  {
    path: "/seeds",
    component: <Seeds />,
  },
  {
    path: "/productdetails",
    component: <Productdetalils />,
  },
  {
    path: "/productList",
    component: <ProductList />,
  },
  {
    path: "/signIn",
    component: <SignIn />,
  },
  {
    path: "/PayOnline",
    component: <PayOnline />,
  },
  {
    path: "/OrderPlaced",
    component: <OrderPlaced />,
  },
  {
    path: "/cart",
    component: <Shopingcart />,
  },
  {
    path: "/orders",
    component: <Orders />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/account",
    component: <Account />,
  },
  {
    path: "/contactus",
    component: <Contactus />,
  },
  {
    path: "/PrivacyPolicy",
    component: <PrivacyPolicy />,
  },
  {
    path: "/Terms",
    component: <Terms />,
  },
  {
    path: "/RefundPolicy",
    component: <RefundPolicy />,
  },
  {
    path: "/PlantCare",
    component: <PlantCare />,
  },
  {
    path: "/Planters",
    component: <Planters />,
  },
];
export const AllRoutes = () => {
  return (
    <Routes>
      {routeInfo.map((eachRoute, id) => {
        return (
          <Route
            basename={process.env.PUBLIC_URL}
            key={id}
            path={eachRoute.path}
            element={eachRoute.component}
          />
        );
      })}
    </Routes>
  );
};
