export default function Thankyou({ hotel }) {
  return (
    <div className="max-w-[600px] mx-auto w-full pr-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for choosing us!</h1>
      <p className="text-xl mb-4 ">{hotel.name}</p>
      <p className="">{hotel.description}</p>
    </div>
  );
}
