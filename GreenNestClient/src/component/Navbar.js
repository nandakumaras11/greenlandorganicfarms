// import Menu from "./Menu";
import Searchbar from "./Searchbar";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import { useState } from "react";
import "../CSS/NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginStatus } from "../Store1/Slices/UserSlice";
const Navbar = () => {
  const user_id = useSelector((state) => state.user.user_id);
  const dispatchStore = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, handleClick] = useState(false);
  const menuClicked = ({ rout, name }) => {
    if (rout == "/signOut") {
      dispatchStore(setUserLoginStatus({ user_id: null }));
      localStorage.setItem("loginCredentials", null);
      navigate("/");
      handleClick(false);
    } else if (rout) {
      navigate(rout, { state: { tag: name } });
      handleClick(false);
    }
  };
  let options = [
    {
      name: "",
      titleIcon: <i className="fa fa-paragraph"></i>,
      hideBorder: true,
      content: [
        {
          id: 1,
          name: "PLANTS",
          children: [
            {
              content: [
                {
                  id: 3,
                  name: "indoor plants",
                  ["Some property i need on clicking this"]: "value",
                  rout: "/productList",
                },
                { id: 4, name: "Flowering Plants", rout: "/productList" },
                { id: 5, name: "Hanging Plants", rout: "/productList" },
                { id: 6, name: "Cacti and Succulents", rout: "/productList" },
                { id: 7, name: "Air Purifying Plants", rout: "/productList" },
              ],
            },
          ],
        },
        {
          id: 8,
          name: "SEEDS",
          children: [
            {
              content: [
                { id: 9, name: "Air Purifying Plants", rout: "/productList" },
                { name: "FLOWER SEEDS", id: 10, rout: "/productList" },
                { name: "VEGETABLE SEEDS", id: 11, rout: "/productList" },
                { name: "MICROGREEN SEEDS", id: 12, rout: "/productList" },
                { name: "HERB SEEDS", id: 13, rout: "/productList" },
                { name: "FLOWER BULBS", id: 14, rout: "/productList" },
                { name: "FRUIT SEEDS", id: 15, rout: "/productList" },
              ],
            },
          ],
        },
        {
          id: 16,
          name: "Planters",
          children: [
            {
              content: [
                { name: "PLASTIC PLANTERS", rout: "/productList" },
                { name: "CERAMIC PLANTERS", rout: "/productList" },
                { name: "METAL PLANTERS", rout: "/productList" },
                { name: "HANGING PLANTERS", rout: "/productList" },
                { name: "PLANT STANDS", rout: "/productList" },
                { name: "ZURI COLLECTION", rout: "/productList" },
                { name: "SEEDLING TRAYYS", rout: "/productList" },
              ],
            },
          ],
        },
        {
          id: 16,
          name: "Plant care",
          children: [
            {
              content: [
                { name: "POTTING MIX AND FERTILISERS", rout: "/productList" },
                { name: "GARDEN TOOLS", rout: "/productList" },
                { name: "WATERING CANS AND SPRAYERS", rout: "/productList" },
                { name: "GARDEN DECOR & ACCESSORIES", rout: "/productList" },
                { name: "PEST CONTROL", rout: "/productList" },
              ],
            },
          ],
        },
        {
          id: 17,
          name: "Account",
          children: [
            {
              content: [
                { name: "Orders", rout: "/orders" },
                // { name: "Change Password", rout: "/password" },
                user_id == null
                  ? { name: "Sign In", rout: "/signIn" }
                  : { name: "Sign Out", rout: "/signOut" },
              ],
            },
          ],
        },
        {
          id: 17,
          name: "FAQ",
          children: [
            {
              content: [
                { name: "Contact US", rout:"/contactus" },
                { name: "Privacy Policy", rout: "/PrivacyPolicy" },
                { name: "Terms & Conditions", rout: "/Terms" },
                { name: "Cancellation & Refund", rout: "/RefundPolicy" },
                { name: "About US", rout: "/About"  },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <MultilevelSidebar
        open={isOpen}
        onToggle={() => handleClick(!isOpen)}
        options={options}
        header="Green Land"
        onItemClick={menuClicked}
      />

      <div className="headerDiv">
        <i
          className="fa fa-bars menuIcon"
          onClick={() => handleClick(true)}
          aria-hidden="true"
        ></i>

        <Link to="/">
          <div className="logo">
            <img src="./image/logo.png" width="60"
             />
          </div>
        </Link>
      </div>
      {location.pathname != "/signIn" && location.pathname != "/OrderPlaced" ? (
        <Link to="/cart">
          <div className="cartButton">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Navbar;
