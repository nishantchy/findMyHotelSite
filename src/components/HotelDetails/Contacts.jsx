import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const Contacts = ({ hotel }) => {
  return (
    <div className="max-w-[280px] mx-auto w-full rounded-lg shadow-xl p-4 mt-[60px]">
      <h3 className="text-[26px] text-start text-primary  mb-[20px] font-semibold">
        Contact Details
      </h3>

      <div className="flex items-center gap-x-3">
        <MdMarkEmailUnread
          style={{ width: "18px", height: "15px" }}
          className="text-primary"
        />
        <p className="leading-[32px] text-[16px] text-gray-600 ">
          {hotel.email}
        </p>
      </div>
      <hr className="mt-2" />
      <div className="flex items-center gap-x-3 mt-5">
        <FaPhoneAlt
          style={{ width: "18px", height: "15px" }}
          className="text-primary"
        />
        <p className="leading-[32px] text-[16px] text-gray-600 ">
          {hotel.phoneNumber}
        </p>
      </div>
      <hr className="mt-2" />
      <div className="flex items-center gap-x-3 mt-5">
        <TbWorldWww
          style={{ width: "20px", height: "18px" }}
          className="text-primary"
        />
        <p className="leading-[32px] text-[16px] text-gray-600 ">
          Visit Website
        </p>
      </div>
      <hr className="mt-2" />
      <div className="flex items-center gap-x-3 mt-5">
        <FaLocationDot
          style={{ width: "20px", height: "18px" }}
          className="text-primary"
        />
        <p className=" text-[16px] text-gray-600 ">{hotel.location.address}</p>
      </div>
    </div>
  );
};

export default Contacts;
