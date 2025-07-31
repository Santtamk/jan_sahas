import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ICarousel from "./components/ICarousel";
import KeyInterventions from "./components/KeyInterventions";
import NavBar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-gradient text-[#F6F6F6] bg-white overflow-hidden px-2 lg:px-7 tracking-[-0.7px]">
      <NavBar />
      <div
        className="
        max-w-[1440px] mx-auto 
       pb-2   lg:flex lg:justify-center lg:items-center lg:flex-col
       "
      >
        <Hero />
        <WhoWeAre />
        <ICarousel />
        <WhatWeDo />
        <KeyInterventions />
      </div>
      <Footer />
    </div>
  );
}
