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
    <div className="text-background/80 w-full px-4">
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
