import Image from "next/image";
import React from "react";

const WhereWW = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <div className="text-background/80  text-2xl lg:text-4xl font-semibold text-center">
          Where We Work
        </div>
        <p className="text-xs md:text-sm opacity-60 pt-5 lg:text-lg text-background/80  text-center ">
          Jan Sahas Empowerment society currently focuses its efforts in Madhya
          Pradesh, India.
        </p>
      </div>
      <div className="flex justify-center items-start flex-col -mt-10 md:-mt-15 lg:-mt-20">
        <div className="lg:w-[700px]  h-full overflow-hidden">
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
