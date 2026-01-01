import React from "react";
import heroBackground from "@/assets/images/hero-background.svg";
import profilePhoto from "@/assets/images/linkedin-photo.jpg";

export default function Hero(): React.JSX.Element {
  return (
    <div
      className="relative flex h-[500px] md:h-[800px] bg-cover bg-top"
      style={{ backgroundImage: `url(${heroBackground.src})` }}
    >
      <div className="flex flex-col absolute md:left-[25%] md:top-[30%] md:translate-x-0 max-w-[300px] top-[38%] left-[50%] translate-x-[-50%]">
        <span className="font-semibold text-emerald-500 md:text-5xl text-2xl">
          Ben Wallace
        </span>
        <span className="font-semibold text-emerald-500 md:text-2xl text-xl">
          Frontend Developer
        </span>
      </div>
      <div className="absolute md:left-[25%] md:top-[40%] max-w-[350px] top-[45%] left-[20%] flex flex-wrap">
        <span className=" text-charcoal md:text-lg md:mt-2 text-base">
          I create intuitive, user-focused experiences.
        </span>
      </div>
      <div
        className="absolute h-[150px] w-[150px] left-[50%] top-[5%] translate-x-[-50%] 
        md:translate-x-0 md:right-[25%] md:top-[25%] md:h-[300px] md:w-[300px] rounded-full 
        bg-cover bg-center bg-no-repeat border-emerald-deep border-5 shadow-lg
    "
        style={{
          backgroundImage: `url(${profilePhoto.src})`,
          backgroundSize: 400,
        }}
      ></div>
    </div>
  );
}
