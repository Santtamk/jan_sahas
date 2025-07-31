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
    <div className="px-2 py-10 flex flex-col md:flex-row md:justify-end md:items-stretch">
      <div className="flex flex-col gap-3 md:w-1/2">
        <div>
          <Image
            src="/logo/js_logo.webp"
            width={60}
            height={40}
            alt="nav_logo"
            className=" "
          />
        </div>
        <div className=" flex flex-col gap-4">
          <div className="text-black opacity-70 flex gap-3 text-xs md:text-sm items-center justify-start">
            <div>
              <IoLocation size={20} />
            </div>
            <div className=" ">
              408, G-1 Ahinsha Height, Manavta Nagar, Indore 452016
            </div>
          </div>
          <div className="text-black opacity-70 flex gap-3 text-xs  items-center justify-start">
            <IoMdCall size={20} />
            <span className=" ">+91 7312845936</span>
          </div>
          <div className="text-black opacity-70 flex gap-3 text-xs  items-center justify-start">
            <IoMdMail size={20} />
            <span className=" ">jses.indore@gmail.com</span>
          </div>
          <div className="text-black opacity-60 flex gap-3 text-xs  items-center justify-start">
            <span className=" ">© 2025 Jan Sahas. All Rights Reserved</span>
          </div>
        </div>
      </div>
      <div className="pt-5 md:w-1/2 flex flex-col md:flex-row  gap-10 md:items-end md:justify-end">
        {Sections.map((section, index) => (
          <div key={index}>
            <div className="text-[#E4742A] text-xs opacity-70 pb-5 cursor-pointer md:text-sm">
              {section.title}
            </div>
            <div className="flex flex-col gap-5 pb-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="text-black opacity-70 text-xs cursor-pointer md:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
