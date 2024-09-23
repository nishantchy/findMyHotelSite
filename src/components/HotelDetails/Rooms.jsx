import { FaBed } from "react-icons/fa6";

const Rooms = ({ hotel }) => {
  return (
    <div className="flex justify-start items-center ">
      <div className="flex flex-col justify-center items-center  bg-white text-p-head mt-5 px-5 py-4">
        <FaBed
          style={{ width: "40px", height: "30px" }}
          className="text-gray-600"
        />
        <p className=" text-gray-600 font-bold mt-3">
          {hotel.numberOfRooms} rooms
        </p>
      </div>
    </div>
  );
};

export default Rooms;
