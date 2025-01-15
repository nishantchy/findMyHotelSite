import HotelListing from "../.././components/FindHotel/HotelListing";
export default async function Page() {
  let data = await fetch(
    "https://findmyhotelbackend-production.up.railway.app/api/hotels"
  );
  let hotels = await data.json();

  return (
    <div>
      <HotelListing hotels={hotels} />
    </div>
  );
}
