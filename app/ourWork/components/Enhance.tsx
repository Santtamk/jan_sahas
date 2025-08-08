import React from "react";

const FourPoints = [
  {
    header: "Informative Brochures & Flyers:",
    paragraph:
      "Easily understandable materials explaining common mental health conditions, symptoms, and where to seek help, translated into local dialects.",
  },
  {
    header: "Awareness Posters:",
    paragraph:
      "Visually engaging posters displayed in community centers, schools, and health posts, promoting mental well-being and rights.",
  },
  {
    header: "Audio Messages/Radio Spots:",
    paragraph:
      "For communities with lower literacy rates, we've developed simple audio messages disseminated through local community radio or group listening sessions.",
  },
  {
    header: "Simplified Legal Guides:",
    paragraph:
      "Basic information on legal rights, particularly related to gender-based violence and caste-based discrimination, presented in an accessible format.",
  },
];

const Enhance = () => {
  return (
    <div
      className="py-10 

      lg:px-10 
         lg:py-15 
      rounded-2xl
       lg:min-h-min-content
       flex 
       flex-col 
    "
    >
      <div className="py-7 flex flex-col items-center justify-center">
        <div className="text-black  text-2xl lg:text-4xl font-semibold text-center ">
          Enhancing Access to Information 
        </div>
        <p className="text-xs md:text-sm  pt-6 lg:text-lg text-black text-center opacity-60 ">
          Bridging the information gap in remote villages is crucial for
          empowerment. We have dedicated efforts to developing and disseminating
          essential educational materials, ensuring vital information on mental
          health, rights, and available resources reaches those who need it
          most. This initiative improves communication and significantly
          increases awareness.
        </p>
      </div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 px-1 md:px-5 flex-col md">
        {FourPoints.map((grid, i) => {
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

export default Enhance;
