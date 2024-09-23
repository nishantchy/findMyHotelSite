import HotelListing from "../.././components/FindHotel/HotelListing";
export default async function Page() {
  let data = await fetch("http://localhost:8000/api/hotels");
  let hotels = await data.json();

  return (
    <div>
      <HotelListing hotels={hotels} />
    </div>
  );
}
