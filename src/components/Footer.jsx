import Image from "next/image";
import logo from "../../public/assets/images/logo-footer.png";
import Link from "next/link";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary text-white mt-[60px]">
      <div className="max-w-[1240px] w-full mx-auto py-[40px] flex flex-col md:flex-row flex-wrap justify-between items-start gap-6">
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-2 gap-y-4 md:gap-y-0">
          <Link href="/">
            <Image src={logo} alt="Hotel Logo" width={115} height={40} />
          </Link>
          <p className="text-p-head font-semibold text-center md:text-left">
            All your travel solutions <br /> at one site.
          </p>
        </div>

        <div className="flex flex-col gap-y-2 text-left">
          <p className="text-p-head font-semibold">Links</p>
          <Link href="/" className="text-small md:text-paragraph">
            Home
          </Link>
          <Link href="/about" className="text-small md:text-paragraph">
            About Us
          </Link>
          <Link href="/findhotel" className="text-small md:text-paragraph">
            Find Hotels
          </Link>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-y-2 text-left">
          <p className="text-p-head font-semibold">Contacts</p>
          <div className="flex justify-start items-center gap-x-3">
            <MdMarkEmailUnread />
            <p className="text-small md:text-paragraph">
              official.findmyhotel@gmail.com
            </p>
          </div>
          <div className="flex justify-start items-center gap-x-3">
            <FaPhoneAlt />
            <p className="text-small md:text-paragraph">
              01-43563276, 01-45673422
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
