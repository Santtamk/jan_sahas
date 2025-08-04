import React from "react";

const FiveGrids = [
  {
    header: "Promotion of equal rights",
    paragraph:
      "Ensuring equal rights for all individuals regardless of caste, religion, gender, or class.",
  },
  {
    header: "Awareness about mental health",
    paragraph:
      "Breaking myths related to mental health and ensuring access to mental health service for people.",
  },
  {
    header: "Empowerment",
    paragraph:
      "Empowering women from poor and marginalized communities so they can fully exercise their rights and bring positive changes to their lives.",
  },
  {
    header: "Education and training",
    paragraph:
      "Providing education and training on mental health, social empowerment, and well-being to enable people to make better decisions for themselves and their families.",
  },
];

const KeyObjectives = () => {
  return (
    <div
      className="py-10 lg:bg-[url('/aboutUs/key.webp')] 
    lg:bg-no-repeat
      lg:bg-cover
      lg:bg-center 
      lg:px-10 
         lg:py-15 
      rounded-2xl
       lg:min-h-min-content
       flex 
       flex-col
       lg:flex-row
  
    "
    >
      <div className="py-7 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-start">
        <div className="text-black lg:text-white text-2xl lg:text-4xl font-semibold text-center lg:text-left">
          Key Objectives
        </div>
        <p className="text-xs md:text-sm  pt-6 lg:text-lg text-black lg:text-white text-center opacity-60 lg:text-left">
          Our work is driven by clear objectives aimed at fostering a more just
          and equitable society:
        </p>
      </div>
      <div className="flex gap-3 px-1 md:px-5 flex-col lg:w-1/2">
        {FiveGrids.map((grid, i) => {
          return (
            <div
              key={i}
              className={`border-2 border-[#E9E9E9] rounded-3xl p-5 text-black hover:bg-black hover:text-white 
                shadow-md lg:bg-white`}
            >
              <div className="text-xl font-bold">{grid.header}</div>
              <p className="text-xs md:text-sm opacity-60 pt-4 lg:text-lg">
                {grid.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyObjectives;
