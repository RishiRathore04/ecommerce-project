import { CheckoutHeader } from "./CheckoutHeader";
import { PaymentSummary } from "./PaymentSummary";
import { OrderSummary } from "./OrderSummary";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CheckoutPage.css";
import "./checkout-header.css";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async()=>{
    const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
      setDeliveryOptions(response.data);
    };

    fetchCheckoutData();

  }, []);

  useEffect(() => {
    const fetchPaymentData = async()=>{

    const response = await axios.get("/api/payment-summary")
      setPaymentSummary(response.data);
    }

    fetchPaymentData();
  }, []);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" href="../public/images/favicon/cart-favicon.png"></link>

      <CheckoutHeader/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} ></OrderSummary>

          <PaymentSummary paymentSummary={paymentSummary}/>
        </div>
      </div>
    </>
  );
}
