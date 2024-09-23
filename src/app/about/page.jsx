import Hero from "../../components/About/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1240px] mx-auto w-full">
        <h1 className="text-subtitle text-center text-primary mt-[60px] mb-[40px] font-semibold">
          Welcome Visitors
        </h1>
        <p className="max-w-[860px] mx-auto leading-[32px] text-[18px] text-gray-600 text-center">
          At <span className="font-semibold text-primary">FindMyHotel.com</span>
          , we believe that finding the perfect place to stay shouldn't be a
          hassle. Our mission is to make hotel booking as simple and stress-free
          as possible, whether you're traveling for business, leisure, or a bit
          of both.
        </p>
        <h1 className="text-subtitle text-center text-primary mt-[60px] mb-[40px] font-semibold">
          Who We Are?
        </h1>
        <p className="max-w-[860px] mx-auto leading-[32px] text-[18px] text-gray-600 text-center">
          <span className="font-semibold text-primary">FindMyHotel.com </span>
          was founded by a team of passionate travelers and tech enthusiasts who
          saw a need for a more user-friendly hotel booking experience. With
          years of experience in both the hospitality and technology industries,
          we understand the challenges that travelers face and strive to provide
          solutions that enhance every step of their journey.
        </p>
        <h1 className="text-subtitle text-center text-primary mt-[60px] mb-[40px] font-semibold">
          Our Mission
        </h1>
        <p className="max-w-[860px] mx-auto leading-[32px] text-[18px] text-gray-600 text-center">
          <span className="font-semibold text-primary">FindMyHotel.com </span>
          was founded by a team of passionate travelers and tech enthusiasts who
          saw a need for a more user-friendly hotel booking experience. With
          years of experience in both the hospitality and technology industries,
          we understand the challenges that travelers face and strive to provide
          solutions that enhance every step of their journey. of both.
        </p>
        <h1 className="text-subtitle text-center text-primary mt-[60px] mb-[40px] font-semibold">
          Our Vision
        </h1>
        <p className="max-w-[860px] mx-auto leading-[32px] text-[18px] text-gray-600 text-center">
          We envision a world where booking a hotel is as enjoyable as the trip
          itself. By continuously innovating and improving our services, we aim
          to become the go-to platform for travelers seeking the best
          accommodations at the best prices.
        </p>
      </div>
    </div>
  );
};

export default page;
