import React from "react";

const FirstImage = () => {
  return (
    <div
      className="
      relative
      bg-[url('/aboutUs/about_us.webp')]
      bg-no-repeat
      bg-cover
      bg-center lg:bg-cover
      flex items-center justify-center
      text-center
      h-[300px] sm:h-[400px] md:h-[500px] "
    >
      <div className="absolute inset-0 bg-black/80 z-0" />
      <div className=" relative text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
        About Us
      </div>
    </div>
  );
};

export default FirstImage;
