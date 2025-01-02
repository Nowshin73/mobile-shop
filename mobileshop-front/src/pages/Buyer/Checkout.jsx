import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import useCart from "../../hooks/useCart";

// Load Stripe public key
const stripePromise = loadStripe("pk_test_51NIwBXHFJZzUDF2BPWOHEZaziAMWXYTVL33l16GBEOTn135uhApFX2ylmFXEZ484i8YctuUYxgI4bdv0f22al4N300f6gh8MuL"); // Replace with your Stripe public key

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
 const [MyCart] = useCart();
 const totalPrice = MyCart?.reduce((total, item) => total + item.quantity * item.price, 0) || "not found";
 console.log(totalPrice)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Create a payment intent on the server
      const { data } = await axios.post("http://localhost:5000/create-payment-intent", {
        amount: totalPrice*100, // Replace with your dynamic amount in cents
        currency: "bdt",
      });

      // Confirm the card payment
      const paymentResult = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setSuccess("Payment succeeded!");
      }
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 lg:w-[60%] mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <div className="mb-4">
        <label className="block text-gray-700 mb-4">Card Details</label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#fa755a",
              },
            },
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : `Pay ${totalPrice}৳`}
      </button>
    </form>
  );
};

const Checkout = () => {
  return (
  <div className="flex flex-col justify-center items-center lg:w-[80vw]"> 
      <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </div>
  );
};

export default Checkout;
