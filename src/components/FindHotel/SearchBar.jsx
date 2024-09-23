"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import HotelCard from "./HotelCard";

export default function SearchBar({ hotels }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(term) ||
        hotel.location.address.toLowerCase().includes(term) ||
        hotel.description.toLowerCase().includes(term)
    );
    setFilteredHotels(filtered);
  };

  return (
    <div className="w-full mb-4">
      <div className="relative max-w-sm mb-4">
        <input
          type="text"
          placeholder="Search your destination"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-8 py-2 text-sm rounded-full border text-text border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <IoIosSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-4 ">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
      {filteredHotels.length === 0 && <p>No hotels found.</p>}
    </div>
  );
}
