import Image from "next/image";
import React from "react";
const Members = [
  {
    name: "Arjun Patel",
    img: "/aboutUs/placeholder.png",
    designation: "Social Outreach Coordinator",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    name: "Priya Sharma",
    img: "/aboutUs/placeholder.png",
    designation: "Social Outreach Coordinator",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    name: "Ravi Kumar",
    img: "/aboutUs/placeholder.png",
    designation: "Social Outreach Coordinator",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    name: "Ravi Kumar",
    img: "/aboutUs/placeholder.png",
    designation: "Social Outreach Coordinator",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    name: "Ravi Kumar",
    img: "/aboutUs/placeholder.png",
    designation: "Social Outreach Coordinator",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    name: "Ravi Kumar",
    img: "/aboutUs/placeholder.png",
    designation: "Social Outreach Coordinator",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
];
const BoardM = () => {
  return (
    <div>
      <div className="text-background/80 text-2xl lg:text-4xl font-semibold text-center pb-5">
        Board Members
      </div>
      {/* <div className="flex flex-wrap justify-center items-center max-w-[900px] mx-auto gap-4">
        {Members.map((member, i) => (
          <div
            key={i}
            className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 w-72 "
          >
            <div className="relative w-full h-56 rounded-t-2xl overflow-hidden z-10">
              <Image
                fill
                alt={member.name}
                src={member.img}
                className="object-cover object-top"
              />
            </div>

            <div className=" p-5">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{member.designation}</p>
              <p className="text-sm text-gray-600  leading-relaxed hidden group-hover:block absolute text-wrap w-72 z-0">
                {member.about}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex flex-wrap justify-center items-center max-w-[900px] mx-auto gap-4">
        {Members.map((member, i) => (
          <div
            key={i}
            className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 w-72"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
              <Image
                fill
                alt={member.name}
                src={member.img}
                className="object-cover object-top"
              />

              {/* Overlay text */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-white leading-relaxed">
                  {member.about}
                </p>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardM;
