"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonSize, ButtonType } from "./Button/button.types";
import projectPhoto from "@/public/images/project-screenshot.png";
import { Project } from "@/assets/types";
import Link from "next/link";
import ClickButton from "./Button/ClickButton";

interface Props {
  data: Project;
}

export default function ProjectCard({ data }: Props): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link href="/contact" className="contents">
        <div
          className="flex flex-col justify-between items-center xl:py-5 px-20 max-w-[280px] cursor-pointer
      border-2 border-emerald-500/20 shadow-md rounded-2xl bg-mist-lighter hover:bg-mist-air hover:border-emerald-300 hover:scale-110 transition duration-400"
        >
          <div
            className={`flex flex-col md:flex-1 lg:flex-2 md:mb-0 mb-8 items-center justify-center`}
          >
            <h2 className="text-emerald-500 font-semibold text-xl mb-1">
              {data.title}
            </h2>
            <div className="relative w-60 h-30 rounded-lg overflow-hidden border-2 border-emerald-400 bg-charcoal mb-2">
              <Image
                src={data.image}
                alt="project-image"
                fill
                className="object-cover"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(true);
                }}
              />
            </div>

            <p className="text-center text-emerald-500 text-md mb-1 font-semibold">
              Built with:
            </p>
            <div className="flex justify-center mb-3 gap-x-1.5">
              {data.key_skills.map((word: string, index: number) => (
                <p
                  key={`${word}${index}`}
                  className="text-center min-w-15 border rounded-full border-emerald-500 px-1.5 py-0.5 text-midstone bg-mint-light/70"
                >
                  {word}
                </p>
              ))}
            </div>
            <p className="text-center text-emerald-500 text-md mb-3">
              {data.description}
            </p>
            <ClickButton type={ButtonType.Primary} size={ButtonSize.Default}>
              Go to Project
            </ClickButton>
          </div>
        </div>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setOpen(false);
            }}
          >
            <button
              className="absolute top-4 right-6 text-white text-4xl"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setOpen(false);
              }}
            >
              ×
            </button>

            <Image
              src={projectPhoto}
              alt="project-image-large"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto"
            />
          </div>
        )}
      </Link>
    </>
  );
}
