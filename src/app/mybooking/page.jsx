import BookingCard from "../../components/MyBooking/BookingCards";

export default async function Page() {
  let data = await fetch(
    "https://findmyhotelbackend-production.up.railway.app/api/bookings"
  );
  let bookings = await data.json();

  return (
    <div className="p-14">
      <BookingCard bookings={bookings} />
    </div>
  );
}
