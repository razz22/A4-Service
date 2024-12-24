import React from "react";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div className="relative">
      {/* Header - Transparent Black */}
      <header className="w-full h-[100px] fixed top-0 left-0 z-20 bg-black bg-opacity-35 border-b border-[#2C2D2D] text-white flex items-center px-[25px]">
        {/* Logo */}
        <div className="w-[250px] border-r border-[#2C2D2D] h-full flex items-center justify-center">
          <img
            src="/images/frontend/logo.png"
            alt="Logo"
            className="w-[212px] h-[50px]"
          />
        </div>

        {/* Menu */}
        <div className="flex justify-between items-center px-[25px] flex-1">
          <ul className="flex gap-4 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Membership</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Shop</li>
          </ul>
          <div>
            <img src="/images/frontend/search.png" alt="Search" />
          </div>
        </div>

        {/* Contact */}
        <div className="w-[360px] flex justify-center items-center gap-3 border-l border-[#2C2D2D] h-full">
          <img src="/images/frontend/phone.png" alt="Phone" />
          <div className="flex flex-col">
            <span className="text-[#79BB51]">Call Anytime</span>
            <span className="text-white font-bold">+12 ( 345 ) 6789</span>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image and Opacity */}
      <section className="w-full h-[856px] bg-hero-bg relative bg-cover bg-bottom bg-no-repeat bg-opacity-40">
        {/* Black Overlay for Hero Section */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-white  items-center justify-center h-full flex flex-col gap-10">
          <h1 className="text-[105px] leading-[108px] font-bold text-center">
            Your reliable expert for every <br /> property care need
          </h1>

          <button className="px-12 py-5 bg-[#87C03D] text-[#0F0F0F] text-[14px] font-bold">
            Book A Service
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
