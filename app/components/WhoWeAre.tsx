import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WhoWeAre = () => {
  return (
    <div className="justify-center items-center flex flex-col px-3 gap-4 overflow-none">
      <h3 className="text-5xl text-background/80 font-semibold ">
        Who we are?
      </h3>
      <p className="text-xs opacity-60 lg:text-lg text-background/80 md:text-sm">
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
        <Link href="/ourWork">
          <button className="px-8 py-3 rounded-full bg-primary text-white hover:scale-101 transition flex justify-center items-center gap-2 hover:bg-white hover:text-primary cursor-pointer">
            Learn more <FaArrowRightLong size={15} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhoWeAre;
