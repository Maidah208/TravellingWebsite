"use client"

import React, { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Decor Image Positioned in the Background */}
      <div className="absolute top-0 right-0 z-0 max-w-full">
        <Image src="/images/HeroSectionImages/Decore.png" alt="Decore" width={618} height={872} />
      </div>

      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 z-50 bg-white shadow-lg w-full px-10 py-4 text-xl font-semibold">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div>
            <Image
              src="/images/Logo.png"
              alt="Logo"
              height={50}
              width={150}
              className="w-24 sm:w-32 md:w-40 lg:w-48" // Adjust size for different screens
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden items-center space-x-6 md:flex">
            <a href="#" className="hover:text-red-500">
              Destinations
            </a>
            <a href="#" className="hover:text-red-500">
              Hotels
            </a>
            <a href="#" className="hover:text-red-500">
              Flights
            </a>
            <a href="#" className="hover:text-red-500">
              Booking
            </a>
            <a href="#" className="hover:text-red-500">
              Login
            </a>

            {/* Sign-up Button */}
            <button className="border border-black rounded px-4 py-2">
              Sign Up
            </button>

            {/* Language Selector */}
            <select name="EN" className="bg-transparent px-2 py-1">
              <option value="EN">EN</option>
              <option value="UR">UR</option>
              <option value="FR">FR</option>
            </select>
          </nav>

          {/* Hamburger Icon */}
          <div className="md:hidden flex flex-col items-center" onClick={toggleMenu}>
            <div className="w-6 h-1 bg-black mb-1"></div>
            <div className="w-6 h-1 bg-black mb-1"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 bg-black text-white opacity-70 pt-20 w-full h-auto flex justify-center items-center z-40 md:hidden">
          <div className="flex flex-col space-y-6 text-xl">
            <a href="#" className="hover:text-red-500">
              Destinations
            </a>
            <a href="#" className="hover:text-red-500">
              Hotels
            </a>
            <a href="#" className="hover:text-red-500">
              Flights
            </a>
            <a href="#" className="hover:text-red-500">
              Booking
            </a>
            <a href="#" className="hover:text-red-500">
              Login
            </a>

            {/* Sign-up Button */}
            <button className="border border-black rounded px-4 py-2">
              Sign Up
            </button>

            {/* Language Selector */}
            <select name="EN" className="bg-transparent px-2 py-1">
              <option value="EN">EN</option>
              <option value="UR">UR</option>
              <option value="FR">FR</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
