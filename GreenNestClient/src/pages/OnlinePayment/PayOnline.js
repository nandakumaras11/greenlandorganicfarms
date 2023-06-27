import { useLocation } from "react-router";
import { useEffect, useRef } from "react";
export const PayOnline = () => {
  const { state } = useLocation();
  const submitBtn = useRef(null);
  const tidRef = useRef(null);

  const data = {
    order_id: state.orderID,
    CUST_ID: state.user_id,
    amount: state.cartTotal,
    currency:"INR",
    merchant_id:2557316,
    redirect_url:"https://greenlandorganicfarms.com/api/User/cca/ccavResponseHandler.php",
    cancel_url:"https://greenlandorganicfarms.com/api/User/cca/ccavResponseHandler.php",

  };
  useEffect(()=>{
    setTimeout(() => {
      submitBtn.current.click();
    }, 1000);
  },[])

  return (
    <div>
      Please wait you will redirect with in 3 sec
      <div>
        <form
          action="https://greenlandorganicfarms.com/api/User/cca/ccavRequestHandler.php"
          method="post"
        >
          <div><input type="hidden" value={new Date().getTime()} readOnly ref={tidRef} name="tid" id="tid"  /></div>
          {Object.keys(data).map((eachItem, index) => {
            return (
              <input key={index} readOnly type="hidden" value={data[eachItem]} name={eachItem} />
              // <input key={index} type="hidden" value={data[eachItem]} name={eachItem} />
            );
          })}
          <input
            className="displayNone"
            ref={submitBtn}
            type="submit"
            value="submit"
          ></input>{" "}
        </form>
      </div>
    </div>
  );
};
