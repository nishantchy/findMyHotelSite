import Hero from "../components/Hero";
import HotelListings from "../components/HotelListings";

export default async function Page() {
  let data = await fetch("http://localhost:8000/api/hotels");
  let hotels = await data.json();

  return (
    <div>
      <Hero />
      <HotelListings hotels={hotels} />
    </div>
  );
}
