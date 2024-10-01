import Thankyou from "../../../components/Booking/Thankyou";
import BookingForm from "../../../components/Booking/BookingForm";

export default async function BookingPage({ params }) {
  const { id } = params;
  let data = await fetch(`http://localhost:8000/api/hotels/${id}`);
  let hotel = await data.json();

  return (
    <div className="max-w-[1240px] w-full mx-auto flex justify-center md:justify-between flex-wrap items-center  p-8">
      <Thankyou hotel={hotel} />
      <BookingForm hotel={hotel} />
    </div>
  );
}
