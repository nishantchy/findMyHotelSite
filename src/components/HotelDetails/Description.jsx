import React from "react";
import Rooms from "./Rooms";

const Description = ({ hotel }) => {
  return (
    <div
      className="max-w-[940px] mx-auto rounded-lg shadow-xl p-4 mt-[60px]"
      id="desc"
    >
      <h3 className="text-[26px] text-start text-primary  mb-[20px] font-semibold">
        {hotel.name}
      </h3>
      <p className=" leading-[32px] text-[16px] text-gray-600 text-left">
        {hotel.description}
      </p>
      <div className="flex justify-between items-start gap-3">
        <Rooms hotel={hotel} />
        <button className="bg-primary text-white px-11 py-4  rounded-full hover:bg-white hover:text-primary transition duration-500 font-semibold  border-primary border-2 mt-[40px]">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Description;