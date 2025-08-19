import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaImages } from "react-icons/fa6";

const Bonds = () => {
  return (
    <div className="flex  justify-center items-center  flex-col md:flex-col  lg:flex-row gap-8 px-3 pt-10  bg-no-repeat bg-top bg-fill ">
      {/* first section */}
      <div className="w-full :md-w[90%] lg:w-1/2 flex flex-col gap-8">
        {/* card */}

        {/* text section */}
        <div className="text-background/80 md:pt-10">
          <p className="text-2xl lg:text-4xl font-semibold">
            Strengthening Community Bonds
          </p>
          <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg">
            Building trust and fostering deep connections with community members
            across various villages is fundamental to our sustainable impact. We
            have cultivated strong, long-term engagements through our consistent
            presence, respectful dialogue, and the implementation of our
            community-led model. This approach ensures that our initiatives are
            truly resonant with local needs and aspirations, empowering
            communities to take ownership of their development.
          </p>
          <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg">
            Our core approach involves actively including survivors, grassroots
            leaders, and community representatives in our decision-making
            processes. This ensures that their voices are not only heard but
            also guide our initiatives, transforming passive beneficiaries into
            active agents of change.
          </p>
        </div>
        <div className="flex gap-3  lg:justify-start justify-center">
          <Link href="/media#photoGallery">
            <button className="inline-flex items-center gap-2 cursor-pointer px-8 py-[0.9375rem] rounded-[2rem] bg-primary text-white  transition-all duration-300 hover:scale-103  font-medium text-xs md:text-sm">
              Photo gallery <FaImages />
            </button>
          </Link>
        </div>
      </div>
      {/* second section */}
      <div className="  md:w-[100%] lg:w-1/2 h-full  ">
        <Image
          src="/ourWork/7.webp"
          alt="hero image"
          width={700}
          height={600}
          className="rounded-2xl object-cover w-full h-screen"
        />
      </div>
    </div>
  );
};

export default Bonds;
