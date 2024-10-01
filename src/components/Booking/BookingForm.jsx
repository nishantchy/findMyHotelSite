"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Load your Stripe public key
const stripePromise = loadStripe(
  "pk_test_51NGiXoAKnbzcuO2Tmcrt1GPoUvEBs7xrl2phjmVpLAgmh0E0zRvQrkjz2LcUAVonvMiNRI26FFLftoeVnHd5g5VX00MQdlQAWc"
);

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

const BookingForm = ({ hotel, userEmail }) => {
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState(JSON.parse(hotel.roomTypes[0])[0]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const handleGuestChange = (event) => {
    setGuests(event.target.value);
  };

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const handleCheckInChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const calculatePrice = () => {
    return hotel.basePrice * guests;
  };

  const isCheckOutValid = () => {
    if (!checkInDate || !checkOutDate) return false;
    return new Date(checkOutDate) > new Date(checkInDate);
  };

  const handleBookingSuccess = () => {
    setIsBookingSuccess(true);
    // You can redirect to the home page after a short delay
    setTimeout(() => {
      // Redirect to home or perform other actions
      window.location.href = "/";
    }, 2000); // Adjust delay as needed
  };

  if (isBookingSuccess) {
    return (
      <div className="text-center text-2xl">Thank you for your booking!</div>
    );
  }

  const roomTypes = JSON.parse(hotel.roomTypes[0]);

  return (
    <div className="max-w-[500px] w-full bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Form</h2>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Check-in Date:
        </label>
        <input
          type="date"
          value={checkInDate}
          onChange={handleCheckInChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Check-out Date:
        </label>
        <input
          type="date"
          value={checkOutDate}
          onChange={handleCheckOutChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          min={checkInDate}
          disabled={!checkInDate}
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Room Type:</label>
        <select
          value={roomType}
          onChange={handleRoomTypeChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          {roomTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Number of Guests:
        </label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={handleGuestChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold">
          Total Price:{" "}
          <span className="text-green-600">{calculatePrice()} Rs.</span>
        </p>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm
          hotel={hotel}
          roomType={roomType}
          guests={guests}
          totalPrice={calculatePrice()}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          userEmail={userEmail}
          onBookingSuccess={handleBookingSuccess}
        />
      </Elements>
    </div>
  );
};

export default BookingForm;
