import React from "react";

const Top = () => {
  return (
    <div
      className="
          relative
          bg-[url('/media/bg.webp')]
          bg-no-repeat
          bg-cover
          flex items-center justify-center
          flex-col
          px-4 text-center
          w-full
          h-[300px] sm:h-[400px] md:h-[500px]
          overflow-hidden
          bg-top-20
        "
    >
      {/* 🌒 Slight dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* 📝 Content */}
      <div className="relative z-10 px-4 text-white">
        <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
          Resources & Media
        </div>
      </div>
    </div>
  );
};

export default Top;
