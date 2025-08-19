import React from "react";

const Programs = [
  {
    header: "Services Provided",
    paragraph:
      "Counselling services, awareness camps, community support group facilitation.",
  },
  {
    header: "Impact",
    paragraph:
      "Significantly increased mental health awareness in rural areas, leading to a positive shift in perspectives and encouraging help-seeking behaviour. Collaboration with local authorities like women's police and juvenile police has led to direct referrals for counselling and support.",
  },
];

const OurProgram = () => {
  return (
    <div
      className="py-10 lg:bg-[url('/ourWork/4.webp')] 
      bg-white
    bg-no-repeat
          bg-cover
          bg-center
          flex items-center justify-center
          flex-col
          px-4 text-center
          w-full
          h-fit
          overflow-hidden
          relative
          my-5
          lg:flex-row"
    >
      {/* 🌒 Slight dark overlay */}
      <div className="absolute inset-0 lg:bg-black/80 z-0" />
      <div className="z-10 flex max-w-[1200px] mx-auto flex-col lg:flex-row">
        <div className="py-7 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-start  z-10">
          <div className=" text-2xl lg:text-4xl font-semibold text-center lg:text-left text-background/80 lg:text-white px-4">
            Our Programs and Initiatives
          </div>
          <p className=" px-4 text-background/80">
            Strengthening Community Mental Health Support
          </p>
          <p className="text-xs md:text-sm  pt-6 lg:text-lg  text-center opacity-60 lg:text-left text-background/80 px-4 lg:text-white">
            Recognizing the critical need for accessible mental healthcare in
            rural and marginalized communities, JSSES provides vital mental
            health services. We work towards improving the mental well-being of
            vulnerable communities, especially rural women and children, by
            providing access to counselling, conducting awareness programs, and
            establishing community-led support systems. Our efforts are aimed at
            breaking the stigma associated with mental health issues and
            ensuring that individuals receive the care and understanding they
            need to thrive.
          </p>
        </div>
        <div className="flex gap-3 px-1 md:px-5 flex-col lg:w-1/2  z-10 md:flex-row ">
          {Programs.map((grid, i) => {
            return (
              <div
                key={i}
                className="border-2 border-[#E9E9E9] rounded-3xl p-5 text-background/80 bg-white md:w-1/2"
              >
                <div className="text-xl font-bold text-background/80">
                  {grid.header}
                </div>
                <p className="text-xs md:text-sm opacity-60 pt-4 lg:text-lg">
                  {grid.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
