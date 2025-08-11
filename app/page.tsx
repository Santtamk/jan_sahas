import Hero from "./components/Hero";
import ICarousel from "./components/ICarousel";
import KeyInterventions from "./components/KeyInterventions";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <div className=" px-4 sm:px-6 lg:px-10">
      <Hero />
      <WhoWeAre />
      <ICarousel />
      <WhatWeDo />
      <KeyInterventions />
    </div>
  );
}
