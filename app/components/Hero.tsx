import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className=" relative flex  justify-center items-center md:flex-col  lg:flex-row gap-8 px-3 bg-[url('/hero/Watermark.jpg')] bg-no-repeat bg-top bg-fill md:h-screen h-[calc(90vh-theme(spacing.20))]">
      {/* first section */}
      <div className="lg:w-1/2 flex flex-col gap-8 ">
        {/* card */}

        {/* text section */}
        <div className="text-black">
          <h1 className="text-5xl font-black font-sauce capitalize pb-2">
            Jan Sahas
          </h1>
          <h2 className="text-2xl font-semibold">Social Empowerment Society</h2>
          <p className="text-xs opacity-50 pt-6">
            Jan Sahas Social Empowerment Society is a not-for-profit
            organisation working in Malwa and Nimar regions in Central India
            with the focus to increase access to mental health support for
            marginalised communities.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center gap-2 cursor-pointer px-8 py-[0.9375rem] rounded-[2rem] bg-[#E4742A] text-white  transition-all duration-300 hover:scale-103  font-medium text-xs">
            Learn More
            <span className="hidden">about us</span>
            {/* <CircleUser size={22} /> */}
          </button>
          <button className="inline-flex items-center gap-2 cursor-pointer px-6 py-[0.9375rem] rounded-[2rem] text-[#E4742A]   transition-all duration-300 hover:scale-103 font-medium text-xs hover:bg-[#EEFCFD] hover:text-[#0F313D]">
            Support Us
            {/* <Play size={22} /> */}
          </button>
        </div>
        <div className="text-xs text-black opacity-50">
          500+ Centers Available all over India
        </div>
      </div>
      {/* second section */}
      <div className="hidden lg:w-1/2 md:flex flex-col gap-[1.25rem] rounded-2xl ">
        {/* image goes here */}
        <div className="rounded-t-2xl overflow-hidden">
          <Image
            className=""
            height={450}
            width={450}
            src="/hero.webp"
            alt="hero image"
          />
        </div>
        {/* second heading */}
      </div>
    </div>
  );
}
