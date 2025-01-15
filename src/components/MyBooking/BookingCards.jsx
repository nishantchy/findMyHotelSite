"use client";
import { useState } from "react";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";

const BookingCards = ({ bookings: initialBookings }) => {
  const [bookings, setBookings] = useState(initialBookings);

  const handleDelete = (bookingId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking._id !== bookingId
    );

    setBookings(updatedBookings);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">My Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-center text-lg">You have no bookings.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col sm:flex-row items-center justify-between border-b p-6 hover:bg-gray-50"
            >
              <div className="flex flex-wrap items-center w-full sm:w-auto">
                <Image
                  src={`https://findmyhotelbackend-production.up.railway.app/${booking.hotelImage}`}
                  alt={booking.hotelName}
                  width={200}
                  height={100}
                  className="rounded-md object-cover"
                />

                <div className="ml-6">
                  <h2 className="text-xl font-semibold">{booking.hotelName}</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {booking.roomType}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Check-in:{" "}
                    <span className="font-semibold">
                      {new Date(booking.checkInDate).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Check-out:{" "}
                    <span className="font-semibold">
                      {new Date(booking.checkOutDate).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col sm:flex-row items-center w-full sm:w-auto">
                <p className="text-lg font-bold text-green-600 mb-4 sm:mb-0 sm:mr-6">
                  Rs.{booking.totalPrice}
                </p>
                <MdDeleteForever
                  onClick={() => handleDelete(booking._id)}
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#D11A2A",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingCards;
