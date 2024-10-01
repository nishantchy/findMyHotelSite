import Hero from "../../../components/HotelDetails/Hero";
import Description from "../../../components/HotelDetails/Description";
import Contacts from "../../../components/HotelDetails/Contacts";
import Gallery from "../../../components/HotelDetails/Gallery";
import MapComponent from "../../../components/HotelDetails/MapComponent";

export default async function Page({ params }) {
  const { id } = params;
  let data = await fetch(`http://localhost:8000/api/hotels/${id}`);
  let hotels = await data.json();

  return (
    <div className="bg-gray-100">
      <Hero hotel={hotels} />

      <div className="max-w-[1240px] mx-auto w-full flex flex-wrap justify-start items-start ">
        <Description hotel={hotels} />

        <Contacts hotel={hotels} />
      </div>
      <Gallery hotel={hotels} />
      <MapComponent hotel={hotels} />
    </div>
  );
}
