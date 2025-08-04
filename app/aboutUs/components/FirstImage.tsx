import React from "react";

const FirstImage = () => {
  return (
    <div
      className="

      bg-[url('/aboutUs/about_us.webp')]
      bg-no-repeat
      bg-cover
      bg-center lg:bg-cover
      flex items-center justify-center
      px-4 text-center
      rounded-3xl
      h-[300px] sm:h-[400px] md:h-[500px] 
    
      "
    >
      <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
        About Us
      </div>
    </div>
  );
};

export default FirstImage;
