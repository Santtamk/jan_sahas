import Image from "next/image";
import React from "react";

type ExtraProps = {
  header: string;
  paragraph: string;
  image: string;
  reverse?: string; // e.g., "flex-row-reverse" or "flex-row"
};

const Extra = ({ header, paragraph, image, reverse }: ExtraProps) => {
  const directionClass =
    reverse === "reverse" ? "md:flex-row-reverse" : "md:flex-row";
  const textAlignClass =
    reverse === "reverse" ? "md:text-right" : "md:text-left";

  return (
    <div
      className={` flex flex-col ${directionClass} justify-center items-center  text-background/80  gap-3 pb-6 md:gap-5`}
    >
      <div className={`md:w-1/2 lg:w-2/3 ${textAlignClass} `}>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold ">
          {header}
        </div>
        <div className="text-xs md:text-sm opacity-60 pt-4 lg:text-lg ">
          {paragraph}
        </div>
      </div>
      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[300px] relative ">
        <Image
          src={image}
          alt="extra image"
          fill
          className="object-contain object-top rounded-lg"
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
        />
      </div>
    </div>
  );
};

export default Extra;
