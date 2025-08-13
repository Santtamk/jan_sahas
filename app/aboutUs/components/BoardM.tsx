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
      <div className="text-black  text-2xl lg:text-4xl font-semibold text-center pb-5">
        Board Members
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Members.map((member, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 max-w-sm mx-auto"
          >
            <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
              <Image
                fill
                alt={member.name}
                src={member.img}
                className="object-cover object-top"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{member.designation}</p>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                {member.about}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardM;


// import React from "react";

// const Members = [
//   {
//     name: "Arjun Patel",
//     img: "/aboutUs/placeholder.png",
//     designation: "Social Outreach Coordinator",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
//   },
//   {
//     name: "Priya Sharma",
//     img: "/aboutUs/placeholder.png",
//     designation: "Social Outreach Coordinator",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
//   },
//   {
//     name: "Ravi Kumar",
//     img: "/aboutUs/placeholder.png",
//     designation: "Social Outreach Coordinator",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
//   },
//   {
//     name: "Ravi Kumar",
//     img: "/aboutUs/placeholder.png",
//     designation: "Social Outreach Coordinator",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
//   },
//   {
//     name: "Ravi Kumar",
//     img: "/aboutUs/placeholder.png",
//     designation: "Social Outreach Coordinator",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
//   },
//   {
//     name: "Ravi Kumar",
//     img: "/aboutUs/placeholder.png",
//     designation: "Social Outreach Coordinator",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
//   },
//   // Add more members...
// ];

// const BoardM = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <h2 className="text-black text-2xl lg:text-4xl font-semibold text-center mb-8">
//         Board Members
//       </h2>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {Members.map((member, i) => (
//           <div
//             key={i}
//             className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
//           >
//             <div className="relative w-fit h-56 rounded-t-2xl overflow-hidden">
//               <Image
//                 width={300}
//                 height={300}
//                 alt={member.name}
//                 src={member.img}
//                 className="w-[300px] h-[200px] object-cover rounded-t-3xl object-top"
//               />
//             </div>

//             <div className="p-5">
//               <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
//                 {member.name}
//               </h3>
//               <p className="text-sm text-gray-500 mt-2">{member.designation}</p>
//               <p className="text-sm text-gray-600 mt-4 leading-relaxed">
//                 {member.about}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BoardM;
