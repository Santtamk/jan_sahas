// import Image from "next/image";
// import React from "react";

// const Stories = [
//   {
//     img: "/aboutUs/placeholder.png",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
//   },
//   {
//     img: "/aboutUs/placeholder.png",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
//   },
//   {
//     img: "/aboutUs/placeholder.png",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
//   },
//   {
//     img: "/aboutUs/placeholder.png",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
//   },
//   {
//     img: "/aboutUs/placeholder.png",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
//   },
// ];

// const SuccessStory = () => {
//   return (
//     <div className="text-black ">
//       <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
//         Success Story
//       </div>
//       <div className="flex flex-col md:flex-row gap-3">
//         {Stories.map((story, i) => {
//           return (
//             <div
//               key={i}
//               className="text-black rounded-3xl  b
//                     border-2 border-[#E9E9E9]
//                       shadow-sm "
//             >
//               <div>
//                 <Image
//                   width={300}
//                   height={300}
//                   className="w-full h-[400px] rounded-t-3xl"
//                   alt="story image"
//                   src={story.img}
//                 />
//               </div>
//               <div className="flex justify-center flex-col items-start p-5">
//                 <div className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg text-black ">
//                   {story.about}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SuccessStory;

"use client";
import Image from "next/image";
import React from "react";

const Stories = [
  {
    img: "/aboutUs/placeholder.png",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna...",
  },
  {
    img: "/aboutUs/placeholder.png",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna...",
  },
  {
    img: "/aboutUs/placeholder.png",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna...",
  },
  {
    img: "/aboutUs/placeholder.png",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna...",
  },
  {
    img: "/aboutUs/placeholder.png",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna...",
  },
];

const SuccessStory = () => {
  return (
    <div className="text-black w-full px-4">
      <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6">
        Success Story
      </div>

      {/* Scrollable Row */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 snap-x snap-mandatory w-full">
          {Stories.map((story, i) => (
            <div
              key={i}
              className="shrink-0 snap-start border-2 border-[#E9E9E9] rounded-3xl shadow-sm bg-white"
              style={{
                width: "85%", // default mobile = 1.5 cards
              }}
            >
              <div className="md:hidden">
                {/* Mobile image */}
                <Image
                  src={story.img}
                  alt="story"
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover rounded-t-3xl"
                />
              </div>
              <div className="hidden md:block">
                {/* Desktop image */}
                <Image
                  src={story.img}
                  alt="story"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-4 text-sm opacity-70">{story.about}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          div[style] {
            width: 45%; /* ~2.5 on md */
          }
        }
        @media (min-width: 1024px) {
          div[style] {
            width: 30%; /* ~3.5 on lg */
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessStory;
