import Image from "next/image";
import { TiLocation } from "react-icons/ti";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const HotelCards = ({ hotels }) => {
  return (
    <div className="flex justify-center md:justify-start flex-wrap gap-6">
      {hotels.map((hotel) => (
        <div
          key={hotel._id}
          className="max-w-[290px] w-full rounded-sm shadow-2xl"
        >
          <Image
            src={`http://localhost:8000/${hotel.images[0]}`}
            width={290}
            height={175}
            alt={hotel.name}
            className="object-cover"
            style={{ height: "175px", width: "290px" }}
          />
          <div className="my-2 p-2">
            <p className="text-p-head font-semibold line-clamp-1">
              {hotel.name}
            </p>
            <p className="text-paragraph text-text line-clamp-2 my-[8px]">
              {hotel.description}
            </p>
            <div>
              <div className="flex items-start gap-3">
                <TiLocation
                  style={{ width: "20px", height: "17px" }}
                  className="text-primary"
                />
                <p className="text-text text-small">{hotel.location.address}</p>
              </div>
              <div className="flex items-start gap-3 my-2">
                <FaStar
                  style={{ width: "18px", height: "15px" }}
                  className="text-primary"
                />
                <p className="text-text text-small">{hotel.ratings} star</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-gray-600">
                Rs.{hotel.basePrice}{" "}
                <span className="text-small text-text">per person</span>
              </p>
              <Link
                href={`/details/${hotel._id}`}
                className="bg-primary text-white px-6 py-1 rounded-full text-small hover:bg-white hover:text-primary transition duration-500 font-semibold border-primary border-2"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCards;
