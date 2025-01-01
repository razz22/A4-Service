// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaRegComments } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneForwardFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export default function Home() {
  const testimonials = [
    {
      img: "/images/frontend/home/testimonials/user1.png",
      name: "Emily Foster",
      role: "HR Admin",
      text: "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
      rating: 4,
    },
    {
      img: "/images/frontend/home/testimonials/user2.png",
      name: "Olivia Green",
      role: "Manager",
      text: "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
      rating: 4,
    },
    {
      img: "/images/frontend/home/testimonials/user3.png",
      name: "Aleesha Brown",
      role: "Founder",
      text: "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
      rating: 4,
    },
    {
      img: "/images/frontend/home/testimonials/user1.png",
      name: "Olivia Green",
      role: "Manager",
      text: "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
      rating: 4,
    },
  ];
  return (
    <>
      <section className="w-full bg-[#191A1E]">
        <div className="container-xl py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            {/* title tag */}
            <div className="h-[60px] flex flex-col justify-around py-2">
              <div className="w-[45px] h-[5px] bg-gradient-to-r from-[#17FF49] to-[#1C711C] rounded-[3px]"></div>
              <span className="text-[#717070] text-[18px] font-bold">
                Our Service
              </span>
            </div>

            <h4 className="text-white text-xl md:text-2l lg:text-3xl xl:text-6xl font-bold leading-[50px] lg:leading-[50px] xl:leading-[80px]">
              Explore What Services <br /> We're Offering
            </h4>
          </div>

          <div>
            <p className="text-[#CCCCCC] text-base leading-6 md:leading-7">
              There are numerous variations of passages available, but the
              majority have been <br /> altered in some form, often
              incorporating electronic terminology or concepts.
            </p>
          </div>
        </div>
      </section>

      <div className="container-xl flex justify-center !-mt-[50px] px-4">
        <Swiper
          slidesPerView={1} // Default slidesPerView
          spaceBetween={20} // Default spacing
          modules={[Pagination]}
          className="services__slider"
          breakpoints={{
            640: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {/** Slide Items */}
          {[
            {
              title: "Surveillance Solution",
              image: "/images/frontend/home/service/surveillence.png",
            },
            {
              title: "Network Solution",
              image: "/images/frontend/home/service/network.png",
            },
            {
              title: "Satellite Solution",
              image: "/images/frontend/home/service/satellite.png",
            },
            {
              title: "TV Mounting",
              image: "/images/frontend/home/service/tv-mounting.png",
            },
            {
              title: "Smart Home Solution",
              image: "/images/frontend/home/service/smart-home.png",
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-[240px] h-[262px] bg-white flex flex-col justify-between items-center py-8 shadow-lg relative hover:bg-[#FFAA17] transition-all group">
                <div className="w-[102px] h-[102px] rounded-full bg-[#F6F6F6] absolute z-[1] group-hover:bg-[#FFB22E] transition-all px-4"></div>
                <div className="z-20 text-center px-[12px]">
                  <span className="text-[#24201F] text-[22px] font-extrabold text-center ">
                    {item.title}
                  </span>
                </div>
                <img
                  src={item.image}
                  className="w-[64px] z-10"
                  alt={item.title}
                />
                <a href="#" className="text-[14px] font-bold text-[#24201F]">
                  READ MORE
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="my-32">
        <div className="container-xl flex flex-col lg:flex-row justify-between gap-4">
          {/* image section  */}
          <div>
            <img
              src="/images/frontend/home/experience.png"
              alt=""
              className="!-ml-[50px]"
            />
          </div>

          {/* content section  */}
          <div>
            {/* title tag  */}
            <div className="h-[60px] flex flex-col justify-around py-2">
              <div className="w-[45px] h-[5px] bg-gradient-to-r from-[#87C03D] to-[#E1EFCF] rounded-[3px]"></div>
              <span className="text-[#717070] text-[18px] font-bold">
                Why Choose Us?
              </span>
            </div>
            <div className="my-3">
              <h4 className="text-5xl font-bold text-[#3F3C3B] tracking-wide">
                Delivering Excellence in <br /> Every Solution
              </h4>
              <p className="text-[#717070] tracking-wide my-10">
                Our team combines decades of experience with cutting-edge
                technologies to deliver results <br /> that exceed expectations.
                Here’s what sets us apart.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="lg:h-[104px] flex items-center gap-4">
                <div>
                  <img
                    src="/images/frontend/home/leading-market.png"
                    className="max-w-16 !h-16 object-contain"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[18px] text-[#24201F] tracking-wide">
                    Leading in marketing
                  </h4>
                  <p className="text-[#717070] tracking-wide mt-2 leading-7 text-sm">
                    Knowledge of technologies rules better than anyone which we
                    apply in our daily <br /> office working schedule
                  </p>
                </div>
              </div>

              <div className="lg:h-[104px] flex items-center gap-4">
                <div>
                  <img
                    src="/images/frontend/home/innovative-solution.png"
                    className="max-w-16 !h-16 object-contain"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[18px] text-[#24201F] tracking-wide">
                    Innovative Solutions:
                  </h4>
                  <p className="text-[#717070] tracking-wide mt-2 leading-7 text-sm">
                    Our team leverages the latest technologies to craft
                    innovative,
                    <br /> tailor-made solutions for your needs.
                  </p>
                </div>
              </div>

              <div className="lg:h-[104px] flex items-center gap-4">
                <div>
                  <img
                    src="/images/frontend/home/dedicated-expert.png"
                    className="max-w-16 !h-16 object-contain"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[18px] text-[#24201F] tracking-wide">
                    Dedicated Experts:
                  </h4>
                  <p className="text-[#717070] tracking-wide mt-2 leading-7 text-sm">
                    A team of highly skilled professionals committed <br /> to
                    achieving your goals.
                  </p>
                </div>
                <button className="hidden xl:block px-12 py-5 bg-[#87C03D] text-[#0F0F0F] text-[14px] font-bold hover:bg-[#0F0F0F] transition-all hover:text-white">
                  Book A Service
                </button>
              </div>
              <button className="block xl:hidden px-12 py-5 bg-[#87C03D] text-[#0F0F0F] text-[14px] font-bold hover:bg-[#0F0F0F] transition-all hover:text-white">
                Book A Service
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="w-[87%] mx-auto">
          {/* title tag  */}
          <div className="h-[60px] flex flex-col justify-around py-2 items-center">
            <div className="w-[45px] h-[5px] bg-gradient-to-r from-[#87C03D] to-[#E1EFCF] rounded-[3px]"></div>
            <span className="text-[#717070] text-sm font-bold">
              OUR PORTFOLIO
            </span>
          </div>

          {/* projects title  */}
          <div className="w-full flex justify-center my-4">
            <h3 className="text-[#353131] text-4xl lg:text-6xl font-bold">
              Explore our recently <br /> completed projects
            </h3>
          </div>

          {/* projects  */}
          <div className=" w-full my-10">
            <Swiper
              slidesPerView={1} // Default slidesPerView
              spaceBetween={20} // Default spacing
              modules={[Pagination]}
              className="services__slider"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  // spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="w-[390px] h-[532px] overflow-hidden group relative">
                  <img
                    src="/images/frontend/home/projects/project1-400x532.png"
                    alt=""
                    className="w-full h-full transform group-hover:scale-105 transition-all"
                  />

                  <div className="absolute w-[350px] h-[220px] transition-all duration-500 delay-200 bg-[#87C03D] transform opacity-90 !-left-[400px] group-hover:!-left-12 bottom-0 rounded-tr-[100px] rounded-br-[20px] !-skew-x-[20deg] px-20 py-6">
                    {/* Wrapper to reset transformations */}
                    <div className="w-full h-full transform skew-x-[20deg]">
                      <div className="left-0 top-0 w-[30px] h-[30px] rounded-full bg-[#000] flex justify-center items-center">
                        <FaArrowRightLong className="text-white" />
                      </div>
                      <div className="flex flex-col gap-2 mt-2">
                        <h3 className="relative before:content-['•'] before:absolute before:-left-[10px] before:top-0 list-disc text-[12px]">
                          DESIGN
                        </h3>
                        <h2 className="font-bold text-2xl">
                          Product & <br /> Design
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[390px] h-[532px] overflow-hidden group relative">
                  <img
                    src="/images/frontend/home/projects/project2-400x532.png"
                    alt=""
                    className="w-full h-full transform group-hover:scale-105 transition-all"
                  />
                  <div className="absolute w-[350px] h-[220px] transition-all duration-500 delay-200 bg-[#87C03D] transform opacity-90 !-left-[400px] group-hover:!-left-12 bottom-0 rounded-tr-[100px] rounded-br-[20px] !-skew-x-[20deg] px-20 py-6">
                    {/* Wrapper to reset transformations */}
                    <div className="w-full h-full transform skew-x-[20deg]">
                      <div className="left-0 top-0 w-[30px] h-[30px] rounded-full bg-[#000] flex justify-center items-center">
                        <FaArrowRightLong className="text-white" />
                      </div>
                      <div className="flex flex-col gap-2 mt-2">
                        <h3 className="relative before:content-['•'] before:absolute before:-left-[10px] before:top-0 list-disc text-[12px]">
                          TECHNOLOGY
                        </h3>
                        <h2 className="font-bold text-2xl">
                          IT <br /> Consulting
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[390px] h-[532px] overflow-hidden group relative">
                  <img
                    src="/images/frontend/home/projects/project3-400x532.png"
                    alt=""
                    className="w-full h-full transform group-hover:scale-105 transition-all"
                  />

                  <div className="absolute w-[350px] h-[220px] transition-all duration-500 delay-200 bg-[#87C03D] transform opacity-90 !-left-[400px] group-hover:!-left-12 bottom-0 rounded-tr-[100px] rounded-br-[20px] !-skew-x-[20deg] px-20 py-6">
                    {/* Wrapper to reset transformations */}
                    <div className="w-full h-full transform skew-x-[20deg]">
                      <div className="left-0 top-0 w-[30px] h-[30px] rounded-full bg-[#000] flex justify-center items-center">
                        <FaArrowRightLong className="text-white" />
                      </div>
                      <div className="flex flex-col gap-2 mt-2">
                        <h3 className="relative before:content-['•'] before:absolute before:-left-[10px] before:top-0 list-disc text-[12px]">
                          DEVELOPMENT
                        </h3>
                        <h2 className="font-bold text-2xl">
                          App <br /> Integration
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[390px] h-[532px] overflow-hidden group relative">
                  <img
                    src="/images/frontend/home/projects/project4-400x532.png"
                    alt=""
                    className="w-full h-full transform group-hover:scale-105 transition-all"
                  />
                  <div className="absolute w-[350px] h-[220px] transition-all duration-500 delay-200 bg-[#87C03D] transform opacity-90 !-left-[400px] group-hover:!-left-12 bottom-0 rounded-tr-[100px] rounded-br-[20px] !-skew-x-[20deg] px-20 py-6">
                    {/* Wrapper to reset transformations */}
                    <div className="w-full h-full transform skew-x-[20deg]">
                      <div className="left-0 top-0 w-[30px] h-[30px] rounded-full bg-[#000] flex justify-center items-center">
                        <FaArrowRightLong className="text-white" />
                      </div>
                      <div className="flex flex-col gap-2 mt-2">
                        <h3 className="relative before:content-['•'] before:absolute before:-left-[10px] before:top-0 list-disc text-[12px]">
                          TECHNOLOGY
                        </h3>
                        <h2 className="font-bold text-2xl">
                          Smart <br /> Visions
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#000000] py-14 mt-[30%]">
        <div className="container-xl !-mt-[25%]">
          <div className="w-full relative">
            <img
              src="images/frontend/home/video.png"
              className="w-full"
              alt=""
            />

            <div className="absolute top-[50%] left-[50%] transform -translate-x-2/4 -translate-y-2/4 cursor-pointer w-[128px] h-[128px] rounded-full bg-[#79BB51] flex justify-center items-center">
              <FaPlay className="text-[#0F0F0F] text-[26px]" />
            </div>
          </div>
        </div>
        <div className="container-xl py-4 flex flex-col lg:flex-row justify-between !mt-[50px]">
          <div className="mb-6">
            {/* title tag  */}
            <div className="h-[60px] py-2">
              <div className="w-[45px] h-[5px] bg-gradient-to-r from-[#82B93A] to-[#263611] rounded-[3px]"></div>
              <span className="text-[#87C03D] text-sm font-bold">FUNFACTS</span>
            </div>
            <div className="mt-2 flex flex-col gap-6 items-center md:items-start">
              <h3 className="text-5xl font-bold text-white tracking-wide">
                We're experts in the <br /> business
              </h3>

              <p className="text-[#CCCCCC] leading-8 tracking-wide">
                There are many variations of passages of available but majority{" "}
                <br />
                alteration in some form, by humou or randomised words
              </p>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-3">
            <div className="w-[240px] h-[240px] bg-[#181818] flex flex-col items-center justify-center gap-5">
              <img
                src="/images/frontend/home/completed.png"
                alt=""
                className="h-[65px] w-[65px]"
              />
              <h2 className="text-white text-3xl font-bold">4520</h2>
              <h5 className="text-[#CCCCCC] font-bold">Projects Completed</h5>
            </div>

            <div className="w-[240px] h-[240px] bg-[#181818] flex flex-col items-center justify-center gap-5">
              <img
                src="/images/frontend/home/bank.png"
                alt=""
                className="h-[65px] w-[65px]"
              />
              <h2 className="text-white text-3xl font-bold">326</h2>
              <h5 className="text-[#CCCCCC] font-bold">
                Business Interogation
              </h5>
            </div>

            <div className="w-[240px] h-[240px] bg-[#181818] flex flex-col items-center justify-center gap-5">
              <img
                src="/images/frontend/home/repeated.png"
                alt=""
                className="h-[65px] w-[65px]"
              />
              <h2 className="text-white text-3xl font-bold">8600</h2>
              <h5 className="text-[#CCCCCC] font-bold">Repeated Customers</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row">
        {/* left section */}
        <div className="flex-1 bg-[#F6F6F6] flex items-center relative flex-col lg:flex-row">
          <div className="pl-6 lg:pl-24 pr-6 hidden xl:block">
            <img
              src="/images/frontend/home/arrow-icon.png"
              alt=""
              className="hidden lg:block -mt-28 w-16"
            />
          </div>

          <div className="p-4 lg:pl-14">
            {/* title tag */}
            <div className="h-[60px] py-2">
              <div className="w-[45px] h-[5px] bg-gradient-to-r from-[#87C03D] to-[#E1EFCF] rounded-[3px]"></div>
              <span className="text-[#79BB51] text-sm font-bold">
                WHY CHOOSE US
              </span>
            </div>

            <div className="mb-6 lg:mb-10">
              <h3 className="text-3xl lg:text-5xl text-[#474443] font-bold">
                Building a design to easy <br className="hidden lg:block" /> for
                business
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {/* Repeated elements */}
              {[...Array(4)].map((_, index) => (
                <div className="flex flex-col gap-3 mb-6" key={index}>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="w-[75px] h-[75px] bg-white rounded-full flex justify-center items-center">
                      <img
                        src={`/images/frontend/home/${
                          [
                            "web-growth",
                            "digital-solution",
                            "consultancy",
                            "expert-developer",
                          ][index]
                        }.png`}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[16px] text-[#24201F]">
                        {[
                          "Web growths",
                          "Digital solutions",
                          "Best consultancy",
                          "Expert developers",
                        ][index]
                          .split(" ")
                          .map((word, i) => (
                            <React.Fragment key={i}>
                              {word}
                              <br className="hidden md:block" />{" "}
                            </React.Fragment>
                          ))}
                      </h3>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-[#6F7174] tracking-wide font-bold leading-8 text-sm 3xl:text-md text-center md:text-left">
                      Good knowledge because you <br /> something many times.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* latest business absolute section */}
          <div className="absolute hidden w-full lg:w-[390px] h-[408px] bg-black opacity-85 -right-0 lg:-right-[390px] top-[50%] translate-y-[-50%] lg:flex flex-col">
            <div className="w-full flex justify-center flex-1 items-center text-center">
              <h4 className="text-white text-lg lg:text-3xl tracking-wide leading-8 lg:leading-10">
                We’re bringing <br /> latest business <br /> innovation in to{" "}
                <br />
                the digital world
              </h4>
            </div>

            <div className="w-full h-[98px] bg-[#79BB51] flex justify-center items-center">
              <h4 className="text-black font-bold text-sm lg:text-[18px]">
                Top quality marketing solutions
              </h4>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="flex-1">
          <img
            src="/images/frontend/home/business-bg.png"
            alt=""
            className="w-full h-auto lg:h-full"
          />
        </div>
      </section>

      <section className="w-full h-auto lg:h-[600px] bg-[#79BB51]  bg-cover">
        <div className="w-full h-full bg-testimonial-bg">
          <div className="w-[90%] lg:w-[86%] ml-auto mr-auto lg:mr-0 flex lg:flex-row flex-col items-center h-full justify-between">
            <div className="flex flex-col gap-6 min-w-[80%] lg:min-w-[300px] py-6 lg:py-0 xl:pr-0 pr-6">
              <div className="">
                <h4 className="text-sm font-bold mb-2">TESTIMONIALS</h4>

                <h2 className="text-[#2E3425] text-3xl xl:text-5xl font-bold tracking-wide leading-[40px] xl:leading-[60px]">
                  What they're <br className="xl:block hidden" /> talking about
                </h2>
              </div>

              <p className="text-[#000000] tracking-wide leading-7">
                Lorem ipsum. Proin gravida nibh vel velit auctor <br /> aliquet.
                Aenean solldin, lorem is simply free text <br /> quis bibendum.
              </p>

              {/* arrow icon  */}
              <div className="flex gap-2">
                <div className="w-[52px] h-[52px] rounded-full bg-[#0F0F0F] cursor-pointer flex justify-center items-center">
                  <FiArrowLeft className="text-[#79BB51]" />
                </div>
                <div className="w-[52px] h-[52px] rounded-full bg-[#0F0F0F] cursor-pointer flex justify-center items-center">
                  <FiArrowRight className="text-[#79BB51]" />
                </div>
              </div>
            </div>

            {/* slider  */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              className="testimonial__slider"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[300px] lg:w-full h-[340px] bg-[#0F0F0F] pt-12 pb-8 px-8 flex flex-col justify-between relative">
                    {/* User Image */}
                    <div className="absolute w-[68px] h-[68px] bg-[#FFAA17] p-[3px] rounded-full left-[40px] -top-8">
                      <div className="w-full h-full bg-black rounded-full p-1">
                        <img src={item.img} alt={item.name} />
                      </div>
                    </div>
                    {/* Testimonial Content */}
                    <div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) =>
                          i < item.rating ? (
                            <MdOutlineStar key={i} className="text-[#79BB51]" />
                          ) : (
                            <MdOutlineStarBorder
                              key={i}
                              className="text-white"
                            />
                          )
                        )}
                      </div>
                      <p className="text-[15px] text-[#B1B1B1] tracking-wide leading-7">
                        {item.text}
                      </p>
                    </div>
                    {/* User Details */}
                    <div>
                      <h3 className="text-white text-2xl font-bold">
                        {item.name}
                      </h3>
                      <p className="text-[#B1B1B1] text-sm">{item.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-xl">
          <div className="mb-6">
            {/* title tag  */}
            <div className="h-[60px] flex flex-col justify-around py-2 items-center">
              <div className="w-[45px] h-[5px] bg-gradient-to-r from-[#FFAD20] to-[#FFDC9F] rounded-[3px]"></div>
              <span className="text-[#79BB51] text-sm font-bold">
                FROM THE BLOG
              </span>
            </div>

            <h3 className="text-[#24201F] text-5xl font-bold text-center">
              News & articles
            </h3>
          </div>

          <div className="w-full ">
            <Swiper
              slidesPerView={1} // Default slidesPerView
              spaceBetween={20} // Default spacing
              modules={[Pagination]}
              className="services__slider"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  // spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1536: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="w-[414px] shadow-md group">
                  <div className="h-[280px] overflow-hidden">
                    <img
                      src="/images/frontend/home/blogs/blog1.png"
                      className="w-full h-full transform group-hover:scale-105 transition-all"
                      alt=""
                    />
                  </div>

                  <div className="p-6">
                    <div className="w-full flex gap-5">
                      <div className="flex items-center gap-2">
                        <HiOutlineUserCircle className="text-[#79BB51]" />
                        <div className="flex gap-2 text-[12px] text-[#767676]">
                          <span>By</span>
                          <span>Shadin</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaRegComments className="text-[#79BB51]" />
                        <div className="flex gap-2 text-[12px] text-[#767676]">
                          <span>1</span>
                          <span>Comment</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-[#24201F] text-lg font-bold mb-3 tracking-wide hover:text-[#79BB51] transition-all">
                        Your Business Safe Ensure <br /> High Availability
                      </h3>

                      <p className="text-[#717070] tracking-wide leading-7">
                        Parturient platea sociis congue maecenas <br /> dictumst
                        imperdiet velit pellentesque rutrum <br /> molestie diam
                        tempor tortor aptent natoque
                      </p>
                    </div>
                  </div>
                  {/* bottom  */}
                  <div className="w-full h-[44px] bg-[#F2F3F6] flex items-center justify-between px-6 peer">
                    <h3 className="text-[#352F27] text-[12px] font-bold peer-hover:text-[#79BB51]">
                      Read More
                    </h3>

                    <div className="w-[30px] h-[30px] rounded-full bg-[#79BB51] flex justify-center items-center">
                      <FiArrowRight className="text-black" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[414px] shadow-md group">
                  <div className="h-[280px] overflow-hidden">
                    <img
                      src="/images/frontend/home/blogs/blog2.png"
                      className="w-full h-full group-hover:scale-105 transition-all"
                      alt=""
                    />
                  </div>

                  <div className="p-6">
                    <div className="w-full flex gap-5">
                      <div className="flex items-center gap-2">
                        <HiOutlineUserCircle className="text-[#79BB51]" />
                        <div className="flex gap-2 text-[12px] text-[#767676]">
                          <span>By</span>
                          <span>Shadin</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaRegComments className="text-[#79BB51]" />
                        <div className="flex gap-2 text-[12px] text-[#767676]">
                          <span>1</span>
                          <span>Comment</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-[#24201F] text-lg font-bold mb-3 tracking-wide hover:text-[#79BB51] transition-all">
                        Your Business Safe Ensure <br /> High Availability
                      </h3>

                      <p className="text-[#717070] tracking-wide leading-7">
                        Parturient platea sociis congue maecenas <br /> dictumst
                        imperdiet velit pellentesque rutrum <br /> molestie diam
                        tempor tortor aptent natoque
                      </p>
                    </div>
                  </div>
                  {/* bottom  */}
                  <div className="w-full h-[44px] bg-[#F2F3F6] flex items-center justify-between px-6 peer">
                    <h3 className="text-[#352F27] text-[12px] font-bold peer-hover:text-[#79BB51]">
                      Read More
                    </h3>

                    <div className="w-[30px] h-[30px] rounded-full bg-[#79BB51] flex justify-center items-center">
                      <FiArrowRight className="text-black" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[414px] shadow-md group">
                  <div className="h-[280px] overflow-hidden">
                    <img
                      src="/images/frontend/home/blogs/blog3.png"
                      className="w-full h-full group-hover:scale-105 transition-all"
                      alt=""
                    />
                  </div>

                  <div className="p-6">
                    <div className="w-full flex gap-5">
                      <div className="flex items-center gap-2">
                        <HiOutlineUserCircle className="text-[#79BB51]" />
                        <div className="flex gap-2 text-[12px] text-[#767676]">
                          <span>By</span>
                          <span>Shadin</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaRegComments className="text-[#79BB51]" />
                        <div className="flex gap-2 text-[12px] text-[#767676]">
                          <span>1</span>
                          <span>Comment</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-[#24201F] text-lg font-bold mb-3 tracking-wide hover:text-[#79BB51] transition-all">
                        Your Business Safe Ensure <br /> High Availability
                      </h3>

                      <p className="text-[#717070] tracking-wide leading-7">
                        Parturient platea sociis congue maecenas <br /> dictumst
                        imperdiet velit pellentesque rutrum <br /> molestie diam
                        tempor tortor aptent natoque
                      </p>
                    </div>
                  </div>
                  {/* bottom  */}
                  <div className="w-full h-[44px] bg-[#F2F3F6] flex items-center justify-between px-6 group">
                    <h3 className="text-[#352F27] text-[12px] font-bold peer-hover:text-[#79BB51]">
                      Read More
                    </h3>

                    <div className="w-[30px] h-[30px] rounded-full bg-[#79BB51] flex justify-center items-center">
                      <FiArrowRight className="text-black" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="w-full h-auto py-4 xl:py-1 xl:h-[800px] bg-[#121212] relative mt-40">
        <div className="w-full h-[230px] absolute left-0 -top-[9rem]">
          {/* contact banner */}
          <div className="container-xl h-[230px] bg-[#79BB51]">
            <div className="w-full h-full bg-contact-bg bg-cover bg-no-repeat flex flex-col md:flex-row md:justify-between justify-center items-center px-10 gap-2">
              <h3 className="text-lg md:text-3xl xl:text-5xl text-black font-bold tracking-wide text-center md:text-left">
                Passion can make a <br /> top-performing company
              </h3>
              <button className="border-none outline-none px-6 py-4 bg-white text-[11px] md:text-sm font-bold hover:bg-black hover:text-white transition-all cursor-pointer">
                CONTACT US
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-qoute-bg flex">
          <div className="container-xl flex flex-col xl:flex-row items-center gap-6 xl:gap-0">
            <div className="flex-1 p-2">
              {/* title tag  */}
              <div className="h-[60px] py-2 items-center">
                <div className="w-[45px] h-[5px] bg-gradient-to-r from-[#87C03D] to-[#E1EFCF] rounded-[3px]"></div>
                <span className="text-[#717070] text-sm font-bold">
                  GET IN TOUCH
                </span>
              </div>

              <div className="flex flex-col gap-8 mb-10">
                <h3 className="text-white text-3xl xl:text-5xl font-bold tracking-wide lead-[30px] mt-5 xl:mt-0 xl:leading-[55px]">
                  Get a free quote <br /> today
                </h3>

                <p className="text-[#CCCCCC]">
                  Web designing in a powerful way of just not an only
                  professions, <br /> however, in a passion for our company
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] bg-[#79BB51] rounded-full flex justify-center items-center">
                    <FaEnvelope className="text-[#0F0F0F] text-[20px]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-white">Email address</h4>
                    <h4 className="text-white">needhelp@company.com</h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] bg-[#79BB51] rounded-full flex justify-center items-center flex-shrink-0">
                    <FaLocationDot className="text-[#0F0F0F] text-[20px]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-white">Visit Us</h4>
                    <h4 className="text-white">
                      66 Road Broklyn Street, 600 New York, USA
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] bg-[#79BB51] rounded-full flex justify-center items-center">
                    <BsTelephoneForwardFill className="text-[#0F0F0F] text-[20px]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-white">Call now</h4>
                    <h4 className="text-white">+999 000 111 222</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 p2">
              {/* form  */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-[70px] outline-none border-none w-full px-4 text-sm placeholder:text-black"
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="h-[70px] outline-none border-none w-full px-4 text-sm placeholder:text-black"
                  />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="h-[70px] outline-none border-none w-full px-4 text-sm placeholder:text-black"
                  />
                  <input
                    type="text"
                    placeholder="Enter Phone"
                    className="h-[70px] outline-none border-none w-full px-4 text-sm placeholder:text-black"
                  />
                </div>

                <div className="w-full">
                  <textarea
                    className="w-full px-4 border-none outline-none text-sm py-4 placeholder:text-black"
                    rows={10}
                    placeholder="Write Message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button className="px-12 py-5 bg-[#87C03D] text-[#0F0F0F] text-[14px] font-bold">
                    Send A Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
