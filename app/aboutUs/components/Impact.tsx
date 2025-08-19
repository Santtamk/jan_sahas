import React from "react";

const Impact = () => {
  return (
    <div className="text-background/80  px-4">
      <div className="text-2xl lg:text-4xl font-semibold text-center">
        We follow a two-fold strategy to ensure lasting impact:
      </div>
      <div className="flex flex-col gap-7 md:flex-row  text-center p-2">
        <div className="md:w-1/2 flex justify-center items-center flex-col">
          <div className="text-white">
            <div className="bg-[#2D2A6D] rounded-4xl  w-fit px-7 py-5 text-xs md:text-sm  lg:text-lg ">
              Effective Implementations
            </div>
          </div>
          <div className=" text-xs md:text-sm opacity-60 pt-6 lg:text-lg">
            Establishing efficient last-mile delivery systems to ensure the most
            vulnerable populations can access existing protections and benefits.
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center flex-col">
          <div className="text-white">
            <div className="bg-[#2D2A6D] rounded-4xl  w-fit px-7 py-5 text-xs md:text-sm  lg:text-lg">
              Transforming Systems
            </div>
          </div>
          <div className=" text-xs md:text-sm opacity-60 pt-6 lg:text-lg">
            Working towards improving systems for all by assisting the
            government and other stakeholders in strengthening infrastructure,
            enhancing accountability, and creating better incentives.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
