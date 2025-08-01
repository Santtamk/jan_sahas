import React from "react";

const WhoWeAre = () => {
  return (
    <div className="justify-center items-center flex flex-col px-3 gap-4  py-10 overflow-none">
      <h3 className="text-5xl text-black font-semibold ">Who we are?</h3>
      <p className="text-xs opacity-60 lg:text-lg text-black md:text-sm">
        We work with the highly excluded communities, including survivors or
        those who are at risk of mental health, gender-based violence, unsafe
        migration, forced labour conditions, sexual exploitation and
        trafficking. We recognize that the communities we work with, deal with
        trauma in their day-to-day lives and are largely deprived of adequate
        mental health care that they require in order to be back on their feet.
        To bridge this gap, we have developed an in-house counselling unit with
        an aim to foster resilience among our communities and ensure their
        access to mental health care at grass-roots level.
      </p>
      <div className="pt-2">
        <button className="inline-flex items-center gap-2 cursor-pointer px-8 py-[0.9375rem] rounded-[2rem] bg-[#E4742A] text-white  transition-all duration-300 hover:scale-103  font-medium text-xs">
          Learn More
          <span className="hidden">about us</span>
        </button>
      </div>
    </div>
  );
};

export default WhoWeAre;
