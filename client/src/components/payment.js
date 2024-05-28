import { useState } from "react";
import "./style.css";
import { loadStripe } from "@stripe/stripe-js";

import Header from "./header";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Payment = () => {
  const [data, setData] = useState({
    Name: "",
    Amount: "",
  });

  const usename = (val) => {
    setData({ ...data, Name: val.target.value });
  };
  const amount = (val) => {
    setData({ ...data, Amount: val.target.value });
  };

  const Paymentfunc = async (event) => {
    event.preventDefault();

    const stripe = await loadStripe(
      "pk_test_51PKx5KSBKvZOz9YcM7Xrk1hW4OvwLvKU80UTW9J1fNv1HFhKpEuvsP2GafM2ZohPA3RbdS5vUDeP3bBORhsQx4ga00Z31TOubj"
    );

    const body = {
      Data: data,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://stripe-backend-uth4.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    console.log(session);
    console.log("session");

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    console.log(result);
    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <>
      <Header />

      <div className="paymentdiv" id="outer">
        <div id="login">
          <form onSubmit={Paymentfunc}>
            <span>
              <FaRegUser />
            </span>
            <input
              type="text"
              id="user"
              placeholder="enter name"
              onChange={usename}
            />

            <span>
              <FaRupeeSign />
            </span>
            <input
              type="text"
              id="pass"
              placeholder="enter money"
              onChange={amount}
            />

            <input type="submit" value="payment" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Payment;
