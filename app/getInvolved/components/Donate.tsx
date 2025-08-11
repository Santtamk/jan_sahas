import React from "react";

const Donate = () => {
  return (
    <div className="py-10 px-3">
      <div className="py-5">
        <div className="text-black text-2xl lg:text-4xl font-semibold text-center">
          Donate: Invest in Empowerment
        </div>
        <p className="text-xs md:text-sm opacity-80 pt-6 lg:text-lg text-black text-center px-10">
          Your financial contribution directly fuels our programs and
          initiatives, enabling us to reach more marginalized individuals and
          strengthen communities. Every donation, no matter the size, makes a
          significant impact on mental health support, women&apos;s livelihoods,
          and the promotion of equal rights. Your generosity helps us provide
          essential services, conduct crucial awareness campaigns, and drive
          systemic change.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 px-10 pt-10">
        <div className="border-2 border-[#E9E9E9] rounded-2xl p-6 text-black md:w-1/2">
          <div className="text-xl font-bold text-left pb-5">
            Your Donation Can Support:
          </div>

          <p className="text-xs md:text-sm opacity-60 lg:text-lg">
            - Mental health counselling sessions for rural women and children.
          </p>
          <p className="text-xs md:text-sm opacity-60 lg:text-lg">
            - Skill-building workshops for women&apos;s livelihood initiatives
            like Usha Silai.
          </p>
          <p className="text-xs md:text-sm opacity-60 lg:text-lg">
            - Development and dissemination of vital educational materials in
            remote villages.
          </p>
          <p className="text-xs md:text-sm opacity-60 lg:text-lg">
            - Advocacy efforts for the rights of migrant workers and other
            vulnerable groups.
          </p>
        </div>
        <div className="border-2 border-[#E9E9E9] rounded-2xl p-6 text-black md:w-1/2">
          <div className=" flex justify-center items-center flex-col text-center">
            <div className="text-xl font-bold pb-5">How to Donate:</div>
            <p className="text-xs md:text-sm opacity-60 lg:text-lg">
              Making a contribution is easy and secure through our online
              payment gateway.
            </p>

            <p className="text-xs md:text-sm opacity-60 lg:text-lg hover:opacity-80 ">
              [Link to Application Form or Slides of Vacancies]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
