import React from "react";
import HeroContent from "../sub/HeroContent";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-screen">
      <Navbar />
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
