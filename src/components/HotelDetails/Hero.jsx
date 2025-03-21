import Image from "next/image";

import { FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Hero = ({ hotel }) => {
  return (
    <div className="relative w-full h-[50vh] md:h-[87vh]">
      <div key={hotel._id}>
        <Image
          src={`https://findmyhotelbackend-production.up.railway.app/${hotel.images[0]}`}
          alt={hotel.name}
          className="object-cover w-full h-full"
          layout="fill"
        />
      </div>
      <div className="absolute inset-0 bg-[#32986A] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:text-left md:left-1/4 w-full max-w-lg px-4 md:px-0">
        <p className="text-3xl md:text-5xl font-figmaHand text-white mb-2">
          {hotel.name}
        </p>
        <p className="text-xl md:text-2xl text-white mb-6">{hotel.address}</p>
        <div className="flex justify-center md:justify-start">
          <Link
            href="#desc"
            smooth={true}
            className="flex items-center gap-3 text-sm md:text-base py-2 md:py-3 bg-white text-primary px-4 md:px-6 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Explore More
            <FaCircleArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
