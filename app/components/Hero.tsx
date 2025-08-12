import Image from "next/image";
import React from "react";
import { IoIosPeople } from "react-icons/io";

export default function Hero() {
  return (
    <>
      <div className="flex  justify-center items-center  flex-col md:flex-col  lg:flex-row gap-8 px-3  bg-no-repeat bg-top bg-fill  h-screen  md:h-dvh">
        {/* first section */}
        <div className="w-full :md-w[90%] lg:w-1/2 flex flex-col gap-8">
          {/* card */}

          {/* text section */}
          <div className="text-black md:pt-10">
            <h1 className="text-5xl lg:text-7xl font-black font-sauce capitalize pb-2">
              Jan Sahas
            </h1>
            <h2
              className="text-2xl lg:text-4xl font-semibold
          "
            >
              Social Empowerment Society
            </h2>
            <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg">
              Jan Sahas Social Empowerment Society is a not-for-profit
              organisation working in Malwa and Nimar regions in Central India
              with the focus to increase access to mental health support for
              marginalised communities.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 cursor-pointer px-8 py-[0.9375rem] rounded-[2rem] bg-[#E4742A] text-white  transition-all duration-300 hover:scale-103 md:text-sm font-medium text-xs">
              Learn More
              <span className="hidden">about us</span>
              {/* <CircleUser size={22} /> */}
            </button>
            <button className="inline-flex items-center gap-2 cursor-pointer px-6 py-[0.9375rem] rounded-[2rem] text-[#E4742A]   transition-all duration-300 hover:scale-103 font-medium text-xs md:text-sm ">
              Support Us
              {/* <Play size={22} /> */}
            </button>
          </div>
          <div className="text-xs md:text-sm text-black opacity-50">
            500+ Centers Available all over India
          </div>
        </div>
        {/* second section */}
        <div className="hidden md:flex md:w-[100%] lg:w-1/2 h-full items-center justify-center lg:py-8 ">
          <div className="w-full h-full">
            <Image
              src="/hero/hero_image.webp"
              alt="hero image"
              width={700}
              height={600}
              className="rounded-2xl object-cover lg:object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
