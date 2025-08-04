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
];
const BoardM = () => {
  return (
    <div>
      <div className="text-black  text-2xl lg:text-4xl font-semibold text-center pb-5">
        Board Members
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        {Members.map((member, i) => {
          return (
            <div
              key={i}
              className="text-black rounded-3xl  b
              border-2 border-[#E9E9E9] 
                shadow-md "
            >
              <div>
                <Image
                  width={300}
                  height={300}
                  className="w-full h-[400px] rounded-t-3xl"
                  alt={member.name}
                  src={member.img}
                />
              </div>
              <div className="flex justify-center flex-col items-start p-5">
                <div className="text-black  text-xl lg:text-3xl font-semibold ">
                  {member.name}
                </div>
                <div className="text-xs md:text-sm opacity-80 pt-6 lg:text-lg text-black  ">
                  {member.designation}
                </div>
                <div className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg text-black ">
                  {member.about}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardM;
