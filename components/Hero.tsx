"use client";
import React from "react";
import heroBackground from "@/assets/images/hero-background.svg";
import profilePhoto from "@/assets/images/linkedin-photo.jpg";
import ClickButton from "./Button/ClickButton";
import LinkButton from "./Button/LinkButton";
import { ButtonSize, ButtonType } from "./Button/button.types";

export default function Hero(): React.JSX.Element {
  function scrollToRecentProjects() {
    const element = document.getElementById("recent-projects");

    element?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div
      className="relative h-[450px] md:h-[600px] bg-cover bg-top"
      style={{ backgroundImage: `url(${heroBackground.src})` }}
    >
      <div className="absolute flex md:flex-row flex-col items-center md:top-[30%] top-[10%] left-[50%] translate-x-[-50%]">
        <div className="order-2 md:order-1 flex flex-col text-center md:max-w-100 max-w-80 md:mr-30 md:mt-0 mt-1justify-center">
          <span className="font-semibold text-emerald-500 md:text-5xl text-2xl">
            Ben Wallace
          </span>
          <div className="relative text-emerald-500 pb-3 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] md:after:w-80 after:w-60 after:-translate-x-1/2 after:bg-current after:[clip-path:polygon(0%_50%,32%_0%,68%_0%,100%_50%,68%_100%,32%_100%)]">
            <span className="font-semibold md:text-2xl text-xl">
              Frontend Developer
            </span>
          </div>
          <span className="font-medium text-charcoal/80 md:text-xl text-lg mt-2">
            Aspiring to build intuitive, user-focused experiences with React and
            Next.js.
          </span>
          <div className="flex justify-center md:mt-3 mt-5">
            <ClickButton
              type={ButtonType.Primary}
              size={ButtonSize.Large}
              onClick={scrollToRecentProjects}
            >
              Recent Projects
            </ClickButton>{" "}
            <LinkButton
              type={ButtonType.Secondary}
              size={ButtonSize.Large}
              link="/contact"
            >
              Contact Me
            </LinkButton>
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex h-[150px] w-[150px] md:translate-x-0 md:translate-y-0 md:h-[250px] md:w-[250px] rounded-[20%] 
        bg-cover bg-center bg-no-repeat border-3 border-emerald-500 md:shadow-lg shadow-sm shadow-emerald-deep md:mb-0 mb-4
    "
          style={{
            backgroundImage: `url(${profilePhoto.src})`,
            backgroundSize: 400,
          }}
        />
      </div>
    </div>
  );
}
