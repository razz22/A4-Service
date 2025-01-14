import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  return (
    <div className="relative">
      {/* Header - Transparent Black */}
      <header className="w-full h-[100px] fixed top-0 left-0 z-20 bg-[#000000bf]  border-b border-[#2C2D2D] text-white flex items-center px-[25px]">
        {/* Logo */}
        <div className="w-[250px] border-r border-[#2C2D2D] h-full flex items-center justify-center">
          <a href="/">
            <img
              src="/images/frontend/logo.png"
              alt="Logo"
              className="w-[140px] lg:w-[212px] h-[33px] lg:h-[50px]"
            />
          </a>
        </div>

        {/* Menu */}
        <div className="flex justify-end md:justify-between items-center px-[25px] flex-1 ">
          <div className="md:hidden">
            <BiMenuAltRight className="text-white text-[26px] cursor-pointer" />
          </div>
          <ul className="items-center hidden gap-4 md:flex">
            <li>
              {" "}
              <a href="" className="text-[13px] lg:text-[16px]">
                Home
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="text-[13px] lg:text-[16px]">
                About
              </a>{" "}
            </li>
            <li>
              <a href="/services" className="text-[13px] lg:text-[16px]">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-[13px] lg:text-[16px]">
                Membership
              </a>
            </li>
            <li>
              <a href="" className="text-[13px] lg:text-[16px]">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="text-[13px] lg:text-[16px]">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="text-[13px] lg:text-[16px]">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="text-[13px] lg:text-[16px]">
                Shop
              </a>
            </li>
          </ul>
          <div className="hidden xl:block">
            <img
              src="/images/frontend/search.png"
              className="cursor-pointer"
              alt="Search"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="w-[360px] xl:flex justify-center items-center gap-3 border-l border-[#2C2D2D] h-full hidden">
          <img src="/images/frontend/phone.png" alt="Phone" />
          <div className="flex flex-col">
            <span className="text-[#79BB51]">Call Anytime</span>
            <span className="font-bold text-white">+12 ( 345 ) 6789</span>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image and Opacity */}
      <section className="w-full h-[856px] bg-hero-bg relative bg-cover bg-bottom bg-no-repeat bg-opacity-40">
        {/* Black Overlay for Hero Section */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-4 text-white md:gap-10">
          <h1 className="text-[50px] leading-[55px] font-bold text-center md:text-[60px]  md:leading-[70px] lg:text-[80px] lg:leading-[90px] xl:text-[95px] xl:leading-[108px]">
            Your reliable expert for every <br className="hidden md:block" />{" "}
            property care need
          </h1>

          <a
            href="/services"
            className="px-8 py-4 bg-[#87C03D] text-[#0F0F0F] text-[14px] font-bold hover:bg-[#0F0F0F] transition-all hover:text-white md:px-10 md:py-5 lg:px-12 lg:py-6"
          >
            Book A Service
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
