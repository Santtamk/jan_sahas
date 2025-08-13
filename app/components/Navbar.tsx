"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  {
    title: "About Us",
    link: "/aboutUs",
  },
  {
    title: "Our Work",
    link: "/ourWork",
  },
  {
    title: "Get Involved",
    link: "/getInvolved",
  },
  {
    title: "Media",
    link: "/media",
  },
  {
    title: "Contact Us",
    link: "/contactUs",
  },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pt-4 flex justify-between items-center xl:py-2 overflow-x-hidden">
      {/* Logo */}
      <div className="cursor-pointer flex justify-center items-center">
        <Link href="/">
          <Image
            src="/logo/js_logo.webp"
            width={85}
            height={40}
            alt="nav_logo"
            className="transition-all duration-300 hover:scale-105 object-contain"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex">
        <ul className="flex">
          {navLinks.map((navLink, i) => (
            <li key={i}>
              <Link
                href={navLink.link}
                className="group relative inline-block text-lg font-medium"
              >
                <span className="relative text-black z-10 inline-block hover:bg-black hover:text-white px-7 py-[0.9375rem] rounded-[2rem]">
                  {navLink.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* below this section's ui is still being developed  */}
      {/* Hamburger for mobile */}
      <div
        className={`lg:hidden flex flex-col gap-1 cursor-pointer transition-transform duration-300 text-black p-3 ${
          isMenuOpen ? "rotate-90 text-white bg-black rounded-full p-3" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <GiHamburgerMenu size={27} />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[113px] left-0 w-full bg-black z-11 px-5 pb-4 lg:hidden transition-all backdrop-blur-md">
          <ul className="flex flex-col gap-5 py-3">
            {navLinks.map((navLink, i) => (
              <li key={i}>
                <Link
                  href={navLink.link}
                  className="block text-[10px] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
