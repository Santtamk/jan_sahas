import Image from "next/image";
import React from "react";

const StakeHolder = () => {
  return (
    <div className="flex  justify-center items-center  flex-col  gap-8 px-3 pt-10   ">
      {/* first section */}
      <div className="w-full   flex  justify-center items-center flex-col gap-8">
        {/* card */}

        {/* text section */}
        <div className="text-black md:pt-10 flex justify-center items-center flex-col ">
          <p className="text-2xl lg:text-4xl font-semibold text-center ">
            Stakeholder Engagement
          </p>
          <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg">
            Establishing and nurturing strong relationships with key
            stakeholders has been instrumental in facilitating the smooth
            execution and broader impact of our mental health workshops and
            other initiatives. Our collaborative approach ensures that our work
            is integrated into the wider social and governance framework.
          </p>
        </div>
      </div>
      {/* second section */}
      <div className="  md:w-[100%] h-full  ">
        <Image
          src="/ourWork/6.webp"
          alt="hero image"
          width={700}
          height={600}
          className="rounded-2xl object-fit w-full h-full"
        />
      </div>
    </div>
  );
};

export default StakeHolder;
