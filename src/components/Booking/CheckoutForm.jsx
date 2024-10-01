import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({
  hotel,
  roomType,
  guests,
  totalPrice,
  checkInDate,
  checkOutDate,
  userEmail,
  onBookingSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setPaymentError(null);

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        throw new Error(error.message);
      }

      const response = await fetch("http://localhost:8000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          hotelId: hotel._id,
          roomType,
          numberOfGuests: guests,
          totalPrice,
          checkInDate,
          checkOutDate,
          userEmail,
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Booking successful!");
        onBookingSuccess();
      } else {
        throw new Error(result.message || "Booking failed");
      }
    } catch (error) {
      setPaymentError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="border border-gray-300 rounded-md p-2 mb-4" />
      {paymentError && <div className="text-red-500 mb-4">{paymentError}</div>}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="bg-primary text-white px-6 py-2 rounded-full hover:bg-white hover:text-primary border border-primary transition duration-500 w-full"
      >
        {isProcessing ? "Processing..." : "Pay and Book"}
      </button>
    </form>
  );
};

export default CheckoutForm;
