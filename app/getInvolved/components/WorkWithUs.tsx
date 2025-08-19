import React from "react";

const Sections = [
  {
    header:
      "Are you passionate about mental health, women's empowerment, or social justice?",
  },
  {
    header:
      "Do you wish to contribute your skills and time to a meaningful cause?",
  },
];

const Opportunities = [
  { para: "Assisting with community awareness campaigns and workshops." },
  { para: "Supporting data collection and research for our programs." },
  { para: "Helping with content creation for educational materials." },
  { para: "Providing administrative support at our project offices." },
  {
    para: "Sharing specialized skills (e.g., graphic design, photography, translation, IT support).",
  },
];

const WorkWithUs = () => {
  return (
    <div className="py-10 px-3">
      <div className="py-5">
        <div className="text-background/80 text-2xl lg:text-4xl font-semibold text-center">
          Work With Us
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {Sections.map((grid, i) => {
          return (
            <>
              <div key={i} className={`p-1 text-background/80`}>
                <div className="text-xl font-semibold text-center">
                  {grid.header}
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>

      <p className="text-xs md:text-sm opacity-80 pt-6 lg:text-lg text-background/80 text-center px-10">
        JSSES welcomes dedicated change makers who are eager to make a tangible
        difference. Working with us offers a unique opportunity to gain hands-on
        experience, contribute to vital community development, and be part of a
        compassionate team.
      </p>

      <div className="flex flex-col md:flex-row gap-5 px-10 pt-10">
        <div className="border-2 border-[#E9E9E9] rounded-2xl p-6 text-background/80 md:w-1/2">
          <div className="text-xl font-bold text-left pb-5">
            Opportunities May Include:
          </div>
          {Opportunities.map((grid, i) => {
            return (
              <p key={i} className="text-xs md:text-sm opacity-60 lg:text-lg">
                - {grid.para}
              </p>
            );
          })}
        </div>
        <div className="border-2 border-[#E9E9E9] rounded-2xl p-6 text-background/80 md:w-1/2">
          <div className=" flex justify-center items-center flex-col text-center gap-5">
            <div className="text-xl font-bold">Vacancies:</div>

            <p className="text-xs md:text-sm lg:text-lg hover:opacity-80 cursor-pointer hover:scale-101 text-primary hover:text-background">
              [Link to Application Form or Slides of Vacancies]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
