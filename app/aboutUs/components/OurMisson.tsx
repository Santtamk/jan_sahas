import React from "react";
const FiveGrids = [
  {
    header: "Our Vision",
    paragraph:
      "Jan Sahas social empowerment society aims to create a society that is socially, economically, and educationally empowered, where every individual is ensures equal rights and opportunities.",
  },
  {
    header: "Our Mission",
    paragraph:
      "Jan Sahas social empowerment society aims to provide equal rights to all individuals, especially those from marginalized communities. It works to raise awareness about mental health and well-being and promotes equality, self-reliance, and development in society.",
  },
];
const OurMisson = () => {
  return (
    <div className="text-background/80 flex flex-col gap-5">
      <div className="text-2xl lg:text-4xl font-semibold text-center lg:text-left ">
        Our Mission
      </div>
      <div className="flex gap-3 flex-col md:flex-row ">
        {FiveGrids.map((grid, i) => {
          return (
            <div
              key={i}
              className={`border-2 border-[#E9E9E9] rounded-3xl p-5 text-background/80 hover:bg-[#2D2A6D] hover:text-white 
                shadow-md lg:bg-white md:w-1/2`}
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

export default OurMisson;
