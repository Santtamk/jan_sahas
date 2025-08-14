import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero/hero_image.webp"
        alt="Jan Sahas - Social Empowerment"
        fill
        priority
        className="object-cover object-top"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center lg:text-left flex flex-col lg:flex-row items-center gap-8">
        {/* Left Text Section */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black">
            Jan Sahas
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mt-2">
            Social Empowerment Society
          </h2>
          <p className="mt-6 text-sm sm:text-base lg:text-lg max-w-xl opacity-90">
            Jan Sahas Social Empowerment Society is a not-for-profit
            organisation working in Malwa and Nimar regions in Central India
            with a focus on increasing access to mental health support for
            marginalised communities.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6 flex-wrap justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full bg-[#E4742A] text-white hover:scale-105 transition">
              Learn More
            </button>
            <button className="px-6 py-3 rounded-full text-[#E4742A] bg-white hover:scale-105 transition">
              Support Us
            </button>
          </div>

          <div className="mt-4 text-xs sm:text-sm opacity-80">
            500+ Centers Available all over India
          </div>
        </div>
      </div>
    </section>
  );
}
