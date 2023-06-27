import { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { httpRequest } from "../../API/api";
import { setUserLoginStatus } from "../../Store1/Slices/UserSlice";

import "./SignIn.css";
export const SignIn = () => {
  const [isSignIn, showHideSignIn] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatchStore = useDispatch();
  const showHideMessage = (message)=>{
    setMessage(message);
    setTimeout(() => {
      setMessage("")
    }, 3000);
  }
  const initialState = {
    name: "",
    phone_no: "",
    address: "",
    password: "",
    signInMobile: "",
    signInPassword: "",
  };

  const signupReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_INPUT":
        return { ...state, [action.payload.name]: action.payload.value };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(signupReducer, initialState);
  const handleInputChange = (event) => {
    return dispatch({
      type: "UPDATE_INPUT",
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const signUp = (event) => {
    if ((isSignIn && state.signInMobile == "")||(isSignIn&&!(/^[6-9]\d{9}$/gm).test(state.signInMobile))) {
      showHideMessage("Mobile number is invalid");
      return;
    } else if (isSignIn && state.signInPassword == "") {
      showHideMessage("Password is empty");
      return;
    } else if (!isSignIn && state.name == "") {
      showHideMessage("Name is empty");
      return;
    } else if ((!isSignIn && state.phone_no == "") || (!isSignIn && !(/^[6-9]\d{9}$/gm).test(state.phone_no))){
      showHideMessage("Mobile number is invalid");
      return;
    } else if (!isSignIn && state.address == "") {
      showHideMessage("Address is empty");
      return;
    } else if (!isSignIn && state.password == "") {
      showHideMessage("Password is empty");
      return;
    }

    httpRequest(
      state,
      isSignIn ? "userAuthentication.php" : "createUser.php"
    ).then((data) => {
      if (isSignIn && data.message.length > 0) {
        dispatchStore(setUserLoginStatus(...data.message));
        localStorage.setItem(
          "loginCredentials",
          JSON.stringify(...data.message)
        );
        navigate(-1);
      } else {
        showHideMessage("Invalid Credentials");
      }
      if (!
        isSignIn && data.status) {
        showHideMessage("Sign up completed successfully please sign in");
        showHideSignIn(true);
      }
    });
  };
  return (
    <>
      {isSignIn ? (
        <div className="signInContainer spacing">
          <div className="signInHeading spacing product-headding">Sign In</div>
          {message == "" ? (
            <></>
          ) : (
            <div className="signUPMessage">{message}</div>
          )}
          <div className="mobile spacing">
            <input
              type="number"
              className="signInControl"
              value={state.signInMobile}
              name="signInMobile"
              onChange={handleInputChange}
              placeholder="Enter Your Mobile Number"
            />
          </div>
          <div className="password spacing">
            {" "}
            <input
              className="signInControl "
              value={state.signInPassword}
              onChange={handleInputChange}
              placeholder="Enter Your Password"
              name="signInPassword"
              type="password"
            />
          </div>
          <div className="button spacing">
            <button className="addbtn" onClick={(event) => signUp(event, true)}>
              Sign In
            </button>
          </div>
          <div className="signUpText product-headding spacing">
            New here ?{" "}
            <span
              onClick={() => showHideSignIn(false)}
              style={{ color: "green", cursor: "pointer" }}
            >
              {" "}
              Create Account
            </span>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="signInContainer">
            <div className="signInHeading spacing product-headding">
              Sign Up
            </div>
            {message == "" ? (
              <></>
            ) : (
              <div className="signUPMessage">{message}</div>
            )}
            <div className="mobile spacing">
              <input
                type="text"
                value={state.name}
                name="name"
                onChange={handleInputChange}
                className="signInControl"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mobile spacing">
              <input
                type="number"
                name="phone_no"
                onChange={handleInputChange}
                className="signInControl"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="address spacing">
              <textarea
                className="signInControl textArea"
                placeholder="Enter Your Address"
                rows="4"
                name="address"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="password spacing">
              <input
                className="signInControl "
                placeholder="Enter Your Password"
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="button">
              <button className="addbtn" onClick={signUp}>
                Sign Up
              </button>
            </div>
            <div className="signUpText product-headding spacing">
              Already have an Account ?{" "}
              <span
                onClick={() => showHideSignIn(true)}
                style={{ color: "green", cursor: "pointer" }}
              >
                {" "}
                Sign In
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
