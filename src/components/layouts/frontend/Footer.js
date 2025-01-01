import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full bg-[#000000] pt-[120px] pb-[180px]">
      <div className="container-xl px-4 flex flex-col lg:flex-row justify-between gap-10 lg:gap-[90px]">
        {/* Footer Content */}
        <div className="flex flex-col gap-5 justify-center flex-1">
          <img src="/images/frontend/logo.png" alt="" className="w-[212px]" />
          <p className="text-[#8C8F94] font-[400] leading-6">
            Desires to obtain pain of itself,
            <br /> because it is pain, but occasionally <br /> circumstances.
          </p>
          <div className="flex gap-3 mt-8">
            <div className="h-[40px] w-[40px] rounded-full bg-[#222429] flex justify-center items-center cursor-pointer hover:bg-[#87C03D] transition-all">
              <FaTwitter className="text-white" />
            </div>
            <div className="h-[40px] w-[40px] rounded-full bg-[#222429] flex justify-center items-center cursor-pointer hover:bg-[#87C03D] transition-all">
              <FaFacebookF className="text-white" />
            </div>
            <div className="h-[40px] w-[40px] rounded-full bg-[#222429] flex justify-center items-center cursor-pointer hover:bg-[#87C03D] transition-all">
              <FaYoutube className="text-white" />
            </div>
            <div className="h-[40px] w-[40px] rounded-full bg-[#222429] flex justify-center items-center cursor-pointer hover:bg-[#87C03D] transition-all">
              <FaLinkedinIn className="text-white" />
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1">
          <div className="h-[60px] w-full border-b border-[#87C03D] flex items-center">
            <h4 className="text-white text-[18px] font-[600]">Useful Links</h4>
          </div>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="text-[#8C8F94]">Team</li>
            <li className="text-[#8C8F94]">Projects</li>
            <li className="text-[#8C8F94]">Testimonial</li>
            <li className="text-[#8C8F94]">Pricing</li>
            <li className="text-[#8C8F94]">FAQ</li>
          </ul>
        </div>

        {/* Explore */}
        <div className="flex-1">
          <div className="h-[60px] w-full border-b border-[#87C03D] flex items-center">
            <h4 className="text-white text-[18px] font-[600]">Explore</h4>
          </div>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="text-[#8C8F94]">Data Visualization</li>
            <li className="text-[#8C8F94]">UI/UX Designing</li>
            <li className="text-[#8C8F94]">Digital Marketing</li>
            <li className="text-[#8C8F94]">Marketing Strategy</li>
            <li className="text-[#8C8F94]">Data Analysis</li>
            <li className="text-[#8C8F94]">Security System</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <div className="h-[60px] w-full border-b border-[#87C03D] flex items-center">
            <h4 className="text-white text-[18px] font-[600]">Contact</h4>
          </div>
          <p className="text-[#8C8F94] mt-4">
            66 Road Broklyn Street, 600 New York,
            <br /> USA
          </p>
          <div className="flex flex-col gap-3 mt-6">
            <div className="flex gap-3">
              <FaEnvelope className="text-[#79BB51]" />
              <span className="text-white">needhelp@company.com</span>
            </div>
            <div className="flex gap-3">
              <BsFillTelephoneFill className="text-[#79BB51]" />
              <span className="text-white">+11 666 888 0000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
