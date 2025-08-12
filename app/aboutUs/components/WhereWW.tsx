import Image from "next/image";
import React from "react";

const WhereWW = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <div className="text-black  text-2xl lg:text-4xl font-semibold text-center">
          Where We Work
        </div>
        <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg text-black  text-center ">
          Jan Sahas Empowerment society currently focuses its efforts in Madhya
          Pradesh, India.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row py-5 gap-2 lg:gap-0 ">
        <div className="w-full h-full hover:scale-105">
          <Image
            src="/aboutUs/Map.svg"
            alt="hero image"
            width={700}
            height={600}
            className="object-fit  w-fit h-fit "
          />
        </div>
      </div>
    </div>
  );
};

export default WhereWW;
