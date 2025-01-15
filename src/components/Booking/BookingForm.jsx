"use client";

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useUser } from "@clerk/nextjs";

const stripePromise = loadStripe(
  "pk_test_51NGiXoAKnbzcuO2Tmcrt1GPoUvEBs7xrl2phjmVpLAgmh0E0zRvQrkjz2LcUAVonvMiNRI26FFLftoeVnHd5g5VX00MQdlQAWc"
);

const BookingForm = ({ hotel, userEmail }) => {
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState(JSON.parse(hotel.roomTypes[0])[0]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  const { user } = useUser();

  const emailAdd = user?.emailAddresses[0]?.emailAddress.toString();
  console.log(user);

  useEffect(() => {
    async function createPaymentIntent() {
      try {
        const res = await fetch(
          "https://findmyhotelbackend-production.up.railway.app/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setClientSecret(data.clientSecret);
        setDpmCheckerLink(data.dpmCheckerLink);
      } catch (error) {
        console.log(error);
      }
    }

    createPaymentIntent();
  }, []);

  console.log(clientSecret, dpmCheckerLink);
  const cs = clientSecret.toString();

  const options = {
    cs,
  };

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

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
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

      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm
            hotel={hotel}
            roomType={roomType}
            guests={guests}
            totalPrice={calculatePrice()}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            userEmail={emailAdd}
            onBookingSuccess={handleBookingSuccess}
            clientS={cs}
          />
        </Elements>
      )}
    </div>
  );
};

export default BookingForm;
