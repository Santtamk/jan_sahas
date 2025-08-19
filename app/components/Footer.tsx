import Image from "next/image";
import React from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Sections = [
  {
    title: "Explore",
    items: ["Our Team", "Careers", "Reports"],
  },
  {
    title: "Services",
    items: ["Projects", "Testimonials", "Blog"],
  },
  {
    title: "Products",
    items: ["Case Studies", "Support", "Events"],
  },
  {
    title: "Resources",
    items: ["Partners", "FAQ", "Contact Us"],
  },
];

const Footer = () => {
  return (
    <div className="bg-background/10">
      <div className="px-3 py-6 flex flex-col   max-w-[1440px] mx-auto ">
        <div className="flex  justify-start items-center gap-3">
          <Image
            src="/logo/fevicon_js 2.svg"
            width={60}
            height={40}
            alt="nav_logo"
            className=" "
          />
          <div className="text-lg sm:text-2xl lg:text-4xl font-semibold mt-2 text-background/80">
            Jan Sahas
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-between gap-3 ">
          <div className=" flex md:w-1/2 flex-col gap-4 pt-4 px-5">
            <div className="text-background/80 opacity-70 flex gap-3 text-xs md:text-sm items-center justify-start">
              <div>
                <IoLocation size={20} />
              </div>
              <div className=" ">
                408, G-1 Ahinsha Height, Manavta Nagar, Indore 452016
              </div>
            </div>
            <div className="text-background/80 opacity-70 flex gap-3 text-xs  items-center justify-start">
              <IoMdCall size={20} />
              <span className=" ">+91 7312845936</span>
            </div>
            <div className="text-background/80 opacity-70 flex gap-3 text-xs  items-center justify-start">
              <IoMdMail size={20} />
              <span className=" ">jses.indore@gmail.com</span>
            </div>
            <div className="text-background/80 opacity-60 flex gap-3 text-xs  items-center justify-start">
              <span className=" ">© 2025 Jan Sahas. All Rights Reserved</span>
            </div>
          </div>

          <div className=" md:w-1/2 flex flex-row  justify-between items-between px-3">
            {Sections.map((section, index) => (
              <div key={index}>
                <div className="text-background text-xs opacity-70 pb-5 cursor-pointer md:text-sm">
                  {section.title}
                </div>
                <div className="flex flex-col gap-5 pb-6">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-background/80 opacity-70 text-xs cursor-pointer md:text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
