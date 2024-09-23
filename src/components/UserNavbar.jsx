"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo-header.png";
import { FcInspection } from "react-icons/fc";
import { IoIosSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const UserNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLinks = () => (
    <>
      <Link
        href="/about"
        className="text-dark hover:text-primary font-semibold text-sm"
      >
        About Us
      </Link>
      <Link
        href="/findhotel"
        className="text-dark hover:text-primary font-semibold text-sm"
      >
        Find Hotels
      </Link>
      <Link
        href="/bookings"
        className="text-dark hover:text-primary font-semibold flex items-center gap-x-1 text-sm"
      >
        <FcInspection className="w-6 h-6" />
        Bookings
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-[1240px] w-full mx-auto px-4 flex justify-between items-center">
        <div className="py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Hotel Logo" width={145} height={90} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <NavLinks />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-primary px-4 py-1 text-sm rounded-full hover:bg-primary hover:text-white transition duration-500 font-semibold uppercase border-primary border-2">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg md:hidden"
      >
        {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="p-6 space-y-6">
          {/* <SearchBar /> */}
          <div className="flex flex-col space-y-4">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
