"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonSize, ButtonType } from "./Button/button.types";
import LinkButton from "./Button/LinkButton";
import projectPhoto from "@/public/images/project-screenshot.png";
import { Project } from "@/assets/types";

interface Props {
  data: Project;
}

export default function ProjectCard({ data }: Props): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col justify-between items-center 
        xl:p-10 max-w-md cursor-pointer
      border-2 border-emerald-500/20 shadow-md rounded-2xl bg-mist-air hover:bg-mint-light/40 hover:scale-105 transition duration-400"
      >
        <div
          className={`flex md:flex-1 lg:flex-2 mb-5 md:mb-5 border-emerald-500 border-3 w-full rounded-lg overflow-hidden bg-charcoal`}
        >
          <Image
            src={data.image}
            alt="project-image"
            onClick={() => setOpen(true)}
            className="cursor-pointer hover:opacity-97 transition duration-200"
            width={1920}
            height={953}
          />
        </div>

        <div
          className={`flex flex-col md:flex-1 lg:flex-2 md:mb-0 mb-8 items-center justify-center`}
        >
          <h2 className="text-emerald-500 font-semibold text-xl mb-2">
            {data.title}
          </h2>
          <p className="text-center text-emerald-500 text-md mb-2 font-semibold">
            Built with:
          </p>
          <div className="flex justify-center gap-x-5 mb-5">
            {data.key_skills.map((word: string, index: number) => (
              <p
                key={`${word}${index}`}
                className="text-center px-2 py-1 min-w-20 rounded-full border-2 border-emerald-500 bg-mint-light/70"
              >
                {word}
              </p>
            ))}
          </div>
          <p className="text-center text-emerald-500 text-md mb-5">
            {data.description}
          </p>
          <LinkButton
            link={data.url}
            type={ButtonType.Primary}
            size={ButtonSize.Default}
            onClick={(e) => e.stopPropagation()}
          >
            Go to Project
          </LinkButton>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-6 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            ×
          </button>

          <Image
            src={projectPhoto}
            alt="project-image-large"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto"
          />
        </div>
      )}
    </>
  );
}
