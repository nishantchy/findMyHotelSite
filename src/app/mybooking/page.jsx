import BookingCard from "../../components/MyBooking/BookingCards";

export default async function Page() {
  let data = await fetch("http://localhost:8000/api/bookings");
  let bookings = await data.json();
  return (
    <div className="p-14">
      <BookingCard bookings={bookings} />
    </div>
  );
}
