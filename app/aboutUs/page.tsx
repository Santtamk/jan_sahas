import React from "react";
import FirstImage from "./components/FirstImage";
import OurStory from "./components/OurStory";
import KeyObjectives from "./components/KeyObjectives";
import OurMisson from "./components/OurMisson";
import Approach from "./components/Approach";
import Impact from "./components/Impact";
import WhereWW from "./components/WhereWW";
import BoardM from "./components/BoardM";

const pages = () => {
  return (
    <div className="px-3 pt-5 ">
      <div className=" py-10">
        <FirstImage />
      </div>
      <div className="py-7 lg:py-12 ">
        <OurStory />
      </div>
      <div className="py-10">
        <OurMisson />
      </div>
      <div className="py-10">
        <KeyObjectives />
      </div>
      <div className="py-5">
        <Approach />
      </div>
      <div className="py-5">
        <Impact />
      </div>
      <div className="py-5">
        <WhereWW />
      </div>
      <div className="py-5">
        <BoardM />
      </div>
    </div>
  );
};

export default pages;
