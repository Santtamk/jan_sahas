import Hero from "./components/Hero";
import ICarousel from "./components/ICarousel";
import KeyInterventions from "./components/KeyInterventions";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";

const images = ["/slider/slider1.webp", "/slider/slider2.webp"];

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className=" px-4 sm:px-6 lg:px-10">
        <WhoWeAre />
        <ICarousel images={images} />
        <WhatWeDo />
        <KeyInterventions />
      </div>
    </>
  );
}
